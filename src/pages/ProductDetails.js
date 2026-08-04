import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Thankyoumodal from "../modal/Thankyoumodal";
import bg from "../images/factory_purpose/1.jpg";
import Nav from "./Nav";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ErrorModal from "../modal/ErrorModal";
import Seo from "../seo/Seo";
import { SITE_NAME, SITE_URL, buildCanonicalUrl } from "../seo/siteConfig";
import {
  normalizeProductImages,
  validateImageUrl,
} from "../utils/productImageValidation";

const EMAIL_API_BASE_URL =
  process.env.REACT_APP_EMAIL_API_BASE_URL ||
  "https://wapparels-email-server-nu.vercel.app";
const PRODUCT_INQUIRY_URL = `${EMAIL_API_BASE_URL}/product-inquiery-email`;

const FABRIC_OPTIONS = [
  "100 % Viscose, 125 gsm",
  "100% Cotton, Thin Twill",
  "100 % Cotton , 4.5 oz",
  "100 % Cotton",
  "70% Cotton, 29% Polyester, 1% Elastane, denim",
  "100 % Viscose",
  "100 % Cotton, twill",
];

const ProductDetails = () => {
  const product = useLoaderData() || {};
  const navigate = useNavigate();
  const {
    _id = "",
    label = "",
    size = "",
    img,
    fabrictype = "",
  } = product;

  const imageList = useMemo(() => normalizeProductImages(img), [img]);
  const productFabricType =
    typeof fabrictype === "string" ? fabrictype.trim() : "";
  const productPath = `/productgallery/${encodeURIComponent(_id)}`;
  const productTitle = `${label || "Apparel Product"} | ${SITE_NAME}`;
  const productDescription = [
    label ? `View ${label}` : "View this apparel product",
    productFabricType ? `made with ${productFabricType}` : "from W. Apparels Ltd.",
    size ? `in size ${size}` : "",
    "and send a product inquiry.",
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  const productCanonicalUrl = buildCanonicalUrl(productPath);
  const productSeoData = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        "@id": `${productCanonicalUrl}#webpage`,
        url: productCanonicalUrl,
        name: productTitle,
        description: productDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "Thing",
          name: label || "Apparel product",
          description: productDescription,
          image: imageList,
          additionalProperty: [
            productFabricType
              ? {
                  "@type": "PropertyValue",
                  name: "Fabric type",
                  value: productFabricType,
                }
              : null,
            size
              ? {
                  "@type": "PropertyValue",
                  name: "Size",
                  value: size,
                }
              : null,
          ].filter(Boolean),
        },
        primaryImageOfPage: imageList[0]
          ? {
              "@type": "ImageObject",
              contentUrl: imageList[0],
              caption: label || "Apparel product",
            }
          : undefined,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Product Gallery",
            item: `${SITE_URL}/productgallery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: label || "Product Details",
            item: productCanonicalUrl,
          },
        ],
      },
    ],
    [
      imageList,
      label,
      productCanonicalUrl,
      productDescription,
      productFabricType,
      productTitle,
      size,
    ],
  );
  const selectableFabricOptions = useMemo(() => {
    if (!productFabricType || FABRIC_OPTIONS.includes(productFabricType)) {
      return FABRIC_OPTIONS;
    }

    return [productFabricType, ...FABRIC_OPTIONS];
  }, [productFabricType]);

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidatingImages, setIsValidatingImages] = useState(true);
  const [validImages, setValidImages] = useState([]);
  const [pic, setPic] = useState("");
  const activeRequestRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
      activeRequestRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const validateImages = async () => {
      setIsValidatingImages(true);
      setValidImages([]);
      setPic("");

      if (imageList.length === 0) {
        navigate("/productgallery", { replace: true });
        return;
      }

      const validationResults = await Promise.all(
        imageList.map(async (imageUrl) => ({
          imageUrl,
          isValid: await validateImageUrl(imageUrl),
        })),
      );

      if (isCancelled || !isMountedRef.current) {
        return;
      }

      const allImagesAreValid = validationResults.every(
        ({ isValid }) => isValid,
      );

      if (!allImagesAreValid) {
        navigate("/productgallery", { replace: true });
        return;
      }

      const validatedImages = validationResults.map(
        ({ imageUrl }) => imageUrl,
      );
      setValidImages(validatedImages);
      setPic(validatedImages[0]);
      setIsValidatingImages(false);
    };

    validateImages();

    return () => {
      isCancelled = true;
    };
  }, [imageList, navigate]);

  const handleClick = () => {
    setOpen(false);
  };

  const handleClickError = () => {
    setOpenError(false);
  };

  const changePic = (nextImage) => {
    if (nextImage) {
      setPic(nextImage);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    activeRequestRef.current?.abort();
    activeRequestRef.current = controller;

    const emailData = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
      label,
      fabricType: form.elements.fabrictype.value,
      size,
      img: validImages,
    };

    setIsSubmitting(true);
    setOpen(false);
    setOpenError(false);

    try {
      const response = await fetch(PRODUCT_INQUIRY_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(emailData),
        signal: controller.signal,
      });

      const responseText = await response.text();
      let data = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          throw new Error(
            `Server returned an invalid response (${response.status}).`,
          );
        }
      }

      if (!response.ok) {
        throw new Error(
          data.message || `Request failed with status ${response.status}.`,
        );
      }

      if (isMountedRef.current) {
        form.reset();
        setOpen(true);
      }
    } catch (error) {
      console.error("Inquiry submission failed:", error);

      if (isMountedRef.current) {
        setOpenError(true);
      }
    } finally {
      window.clearTimeout(timeoutId);

      if (activeRequestRef.current === controller) {
        activeRequestRef.current = null;
      }

      if (isMountedRef.current) {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <Seo
        title={productTitle}
        description={productDescription}
        path={productPath}
        image={imageList[0]}
        imageAlt={label || `${SITE_NAME} apparel product`}
        type="product"
        structuredData={productSeoData}
      />
      <Nav />
      <main
        style={{ backgroundImage: `url(${bg})` }}
        className="relative mx-auto min-h-screen w-full bg-cover font-Nunito"
      >
        <div className="min-h-screen bg-black/75 text-white">
          <div className="pt-10 text-center lg:py-5">
            <h1 className="mt-8 text-3xl font-bold">Product Details</h1>
          </div>

          {isValidatingImages ? (
            <div
              className="flex min-h-[420px] items-center justify-center"
              role="status"
              aria-live="polite"
            >
              <span
                className="loading loading-spinner loading-lg"
                aria-hidden="true"
              />
              <span className="ml-3 font-semibold">Loading product...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-8 px-4 pb-10 lg:flex-row lg:items-start lg:justify-around lg:gap-6 lg:px-8">
              <section className="w-full lg:w-auto">
                <div className="flex flex-col justify-center lg:flex-row">
                  <div className="flex flex-row lg:flex-col">
                    {validImages.slice(0, 2).map((imageUrl, index) => (
                      <button
                        key={imageUrl}
                        type="button"
                        className="mr-2 mb-3 cursor-pointer rounded border-2 bg-transparent p-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:mr-0"
                        onClick={() => changePic(imageUrl)}
                        aria-label={`Show ${label || "product"} image ${index + 1}`}
                        aria-pressed={pic === imageUrl}
                      >
                        <img
                          className="h-12 w-18 object-contain"
                          src={imageUrl}
                          alt={`${label || "Product"} preview ${index + 1}`}
                          onError={() =>
                            navigate("/productgallery", { replace: true })
                          }
                        />
                      </button>
                    ))}
                  </div>

                  <TransformWrapper>
                    <TransformComponent>
                      <img
                        className="h-80 max-w-full object-contain"
                        src={pic || validImages[0] || ""}
                        alt={label || "Product preview"}
                        onError={() =>
                          navigate("/productgallery", { replace: true })
                        }
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>

                <div className="flex justify-center">
                  <h2 className="text-center text-3xl font-bold">{label}</h2>
                </div>

                <div className="flex justify-center">
                  <div className="card-body py-4 text-center">
                    {productFabricType && (
                      <h3>Fabric Type: {productFabricType}</h3>
                    )}
                    {size && <h3>Size: {size}</h3>}
                  </div>
                </div>
              </section>

              <section className="card mb-5 w-[90%] max-w-xl flex-shrink-0 bg-base-100 text-black shadow-2xl lg:mb-0 lg:w-1/2">
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="mb-1">
                    <h2 className="text-2xl font-bold">Send Product Inquiry</h2>
                    <p className="mt-1 text-sm text-gray-600">
                      Complete the form below and our team will contact you.
                    </p>
                  </div>

                  <div className="form-control">
                    <label className="label" htmlFor="inquiry-fabric-type">
                      <span className="label-text font-bold">Fabric Type</span>
                    </label>
                    <select
                      id="inquiry-fabric-type"
                      name="fabrictype"
                      className="select select-bordered"
                      defaultValue={productFabricType}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select a fabric type
                      </option>
                      {selectableFabricOptions.map((fabricOption) => (
                        <option key={fabricOption} value={fabricOption}>
                          {fabricOption}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label" htmlFor="inquiry-name">
                      <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      maxLength={100}
                      className="input input-bordered"
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label" htmlFor="inquiry-email">
                      <span className="label-text font-bold">Email</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      maxLength={254}
                      className="input input-bordered"
                      autoComplete="email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label" htmlFor="inquiry-message">
                      <span className="label-text font-bold">Message</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={5}
                      placeholder="Write your inquiry here"
                      maxLength={5000}
                      className="textarea textarea-bordered"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    className="btn btn-primary w-full"
                    type="submit"
                    disabled={isSubmitting}
                    aria-live="polite"
                  >
                    {isSubmitting && (
                      <span
                        className="loading loading-spinner loading-sm"
                        aria-hidden="true"
                      />
                    )}
                    {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                  </button>
                </form>
              </section>
            </div>
          )}

          <Thankyoumodal open={open} handleClick={handleClick} />
          <ErrorModal
            openError={openError}
            handleClickError={handleClickError}
          />
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
