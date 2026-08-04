import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Thankyoumodal from "../modal/Thankyoumodal";
import bg from "../images/factory_purpose/1.jpg";
import Nav2 from "./Nav2";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ErrorModal from "../modal/ErrorModal";

const EMAIL_API_BASE_URL =
  process.env.REACT_APP_EMAIL_API_BASE_URL ||
  "https://wapparels-email-server-nu.vercel.app";
const PRODUCT_INQUIRY_URL = `${EMAIL_API_BASE_URL}/product-inquiery-email`;

const ProductDetails = () => {
  const loaderData = useLoaderData() || {};
  const { label, size, img } = loaderData;
  const imageList = useMemo(() => (Array.isArray(img) ? img : []), [img]);

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pic, setPic] = useState(imageList[0] || "");
  const [validImages, setValidImages] = useState([]);
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
    if (!imageList.length) {
      setValidImages([]);
      setPic("");
      return;
    }

    let isCancelled = false;

    const validateImages = async () => {
      const results = await Promise.all(
        imageList.map(
          (image) =>
            new Promise((resolve) => {
              if (!image) {
                resolve(null);
                return;
              }

              const imgElement = new Image();
              imgElement.onload = () => resolve(image);
              imgElement.onerror = () => resolve(null);
              imgElement.src = image;
            }),
        ),
      );

      if (!isCancelled && isMountedRef.current) {
        const filteredImages = results.filter(Boolean);
        setValidImages(filteredImages);
        setPic((currentPic) => {
          if (filteredImages.includes(currentPic)) {
            return currentPic;
          }

          return filteredImages[0] || "";
        });
      }
    };

    validateImages();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  const handleClick = () => {
    setOpen(false);
  };

  const handleClickError = () => {
    setOpenError(false);
  };

  const changePic = (nextImg) => {
    if (nextImg) {
      setPic(nextImg);
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

    const emaildata = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
      label: label || "",
      fabricType: form.elements.fabrictype.value,
      size: size || "",
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
        body: JSON.stringify(emaildata),
        signal: controller.signal,
      });

      const responseText = await response.text();
      let data = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch (error) {
          throw new Error(
            `Server returned an invalid response (${response.status})`,
          );
        }
      }

      if (!response.ok) {
        throw new Error(
          data.message || `Request failed with status ${response.status}`,
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
      <Nav2></Nav2>
      <div
        style={{
          backgroundImage: ` url(${bg})`,
        }}
        className="relative  mx-auto w-full bg-cover font-Nunito "
      >
        <div className="absulate text-white bg-black/75">
          <div className="text-center pt-10 lg:py-5">
            <h1 className="text-3xl font-bold mt-8">Product Details</h1>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-start">
            <div>
              <div className="flex lg:flex-row flex-col justify-center">
                <div className="flex lg:flex-col flex-row">
                  {validImages.slice(0, 2).map((image, index) => (
                    <img
                      key={`${image || index}`}
                      className="mr-2 lg:mr-0 h-12 w-18 border-2 rounded p-1 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 cursor-pointer"
                      onClick={() => changePic(image)}
                      src={image}
                      alt={`${label || "Product"} preview ${index + 1}`}
                    />
                  ))}
                </div>

                <TransformWrapper>
                  <TransformComponent>
                    <img
                      className="h-80"
                      src={pic || validImages[0] || ""}
                      alt={label || "Product preview"}
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
              <div className="flex justify-center">
                <div>
                  <h1 className="text-3xl font-bold">{label}</h1>
                </div>
              </div>
            </div>

            <div className="card flex-shrink-0 lg:w-1/2 w-[90%] max-w-xl shadow-2xl bg-base-100 text-black mb-5 lg:mb-0">
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
                    defaultValue=""
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>
                      Select a fabric type
                    </option>
                    <option>100 % Viscose, 125 gsm</option>
                    <option>100% Cotton, Thin Twill</option>
                    <option>100 % Cotton , 4.5 oz</option>
                    <option>100 % Cotton</option>
                    <option>
                      70% Cotton, 29% Polyester, 1% Elastane, denim
                    </option>
                    <option>100 % Viscose</option>
                    <option>100 % Cotton, twill</option>
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
                  className="w-full btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                  aria-live="polite"
                >
                  {isSubmitting && (
                    <span
                      className="loading loading-spinner loading-sm"
                      aria-hidden="true"
                    ></span>
                  )}
                  {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                </button>
              </form>
            </div>
          </div>

          <Thankyoumodal open={open} handleClick={handleClick} />
          <ErrorModal
            openError={openError}
            handleClickError={handleClickError}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
