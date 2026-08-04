import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import communityImage from "../images/hero/2.png";
import careerImage from "../images/hero/3.jpeg";
import productImage from "../images/hero/4.jpg";
import philosophyImage from "../images/hero/5.jpg";
import partnershipImage from "../images/hero/1.jpg";
import "./Banner.css";
import { Award, ShieldCheck, Leaf, Layers3 } from "lucide-react";

const AUTOPLAY_DELAY_MS = 7000;

const ArrowIcon = ({ direction }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="hero-carousel__arrow-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {direction === "previous" ? (
      <path d="m15 18-6-6 6-6" />
    ) : (
      <path d="m9 18 6-6-6-6" />
    )}
  </svg>
);

const StandardSlideContent = ({ slide }) => (
  <div className="hero-carousel__content">
    <div className="hero-carousel__eyebrow">
      <span className="hero-carousel__eyebrow-dot" />
      {slide.eyebrow}
    </div>

    <h1 className="hero-carousel__title">{slide.title}</h1>
    <p className="hero-carousel__description">{slide.description}</p>

    {slide.cta && (
      <Link className="hero-carousel__cta" to={slide.cta.to}>
        {slide.cta.label}
        <span aria-hidden="true">→</span>
      </Link>
    )}
  </div>
);

const PartnershipSlideContent = () => (
  <div className="hero-carousel__partnership-layout">
    <div className="hero-carousel__partnership-heading">
      <div className="hero-carousel__eyebrow">
        <span className="hero-carousel__eyebrow-dot" />
        PARTNERSHIP & CONTACT
      </div>
      <h1 className="hero-carousel__title hero-carousel__title--partnership">
        Let&apos;s Build Lasting Business Together
      </h1>
    </div>

    <div className="hero-carousel__business-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-white text-left">
      <article className="hero-carousel__business-card bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15 flex flex-col justify-between">
        <div>
          <span
            className="inline-flex p-2 bg-emerald-500/20 text-emerald-400 rounded-xl mb-2 lg:mb-3"
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </span>
          <h3 className="text-base lg:text-xl font-bold text-white mb-2">
            Let&apos;s Do Business Together
          </h3>
          <p className="text-xs lg:text-sm text-gray-200 leading-relaxed opacity-90">
            Our promise is to keep strong commitments, deliver superior quality,
            and build lasting relationships in the global RMG sector.
          </p>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-300">
          Prioritizing excellence over mass production.
        </div>
      </article>

      <article className="hero-carousel__business-card bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15">
        <h3 className="flex items-center gap-2 mb-4 text-base font-bold text-white lg:text-xl">
          <Award className="w-5 h-5 text-amber-400 lg:w-6 lg:h-6" />
          Why Choose Us?
        </h3>

        <ul className="space-y-3 text-xs text-gray-200 lg:text-sm">
          <li className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong>30+ Years</strong> of Experience
            </span>
          </li>

          <li className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Premium Quality Products</span>
          </li>

          <li className="flex items-center gap-3">
            <Leaf className="w-5 h-5 text-green-400 shrink-0" />
            <span>Committed to Sustainability</span>
          </li>

          <li className="flex items-center gap-3">
            <Layers3 className="w-5 h-5 text-sky-400 shrink-0" />
            <span>Consistent Manufacturing Standards</span>
          </li>
        </ul>
      </article>

      <article className="hero-carousel__business-card bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15 md:col-span-2 lg:col-span-1">
        <h3 className="text-base lg:text-xl font-bold text-white mb-3 flex items-center gap-2">
          <svg
            className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Get In Touch
        </h3>
        <div className="space-y-2 text-xs lg:text-sm text-gray-200">
          <div className="flex items-start gap-2.5">
            <svg
              className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="flex flex-col">
              <a
                href="tel:+8801853340765"
                className="hover:text-emerald-400 transition-colors"
              >
                +880 1853-340765
              </a>
              <a
                href="tel:+8801819274335"
                className="hover:text-emerald-400 transition-colors"
              >
                +880 1819-274335
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-blue-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:info@wapparels.com"
              className="hover:text-blue-400 transition-colors underline decoration-blue-400/50"
            >
              info@wapparels.com
            </a>
          </div>
          <div className="flex items-start gap-2.5">
            <svg
              className="w-4 h-4 text-rose-400 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="leading-snug">
              295/JA/4 Rayer Bazar, Dhaka-1209, Bangladesh
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
);

const Banner = () => {
  const slides = useMemo(
    () => [
      {
        id: "partnership-contact",
        image: partnershipImage,
        alt: "W. Apparels product collection prepared for business partners",
        customContent: true,
      },
      {
        id: "community-impact",
        eyebrow: "COMMUNITY & IMPACT",
        title: "Empowering Local Businesses for a Thriving Community",
        description:
          "We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem.",
        image: communityImage,
        alt: "Garments displayed in a local apparel business",
      },
      {
        id: "career-culture",
        eyebrow: "CAREER & CULTURE",
        title:
          "Unlocking Potential: Creating Boundless Employment Opportunities",
        description:
          "We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.",
        image: careerImage,
        alt: "W. Apparels team members collaborating around a meeting table",
        cta: { label: "View Opportunities", to: "/career" },
      },
      {
        id: "product-collection",
        eyebrow: "PRODUCT COLLECTION",
        title:
          "Unveiling Versatility: Elevate Your Wardrobe With Our Diverse Threads",
        description:
          "We take pride in crafting a diverse collection for every facet of your style. From tops and bottoms to sweaters and outerwear, our garments combine thoughtful design, dependable quality, and everyday versatility.",
        image: productImage,
        alt: "A selection of W. Apparels garments on display",
        cta: { label: "View Products", to: "/productgallery" },
      },
      {
        id: "core-philosophy",
        eyebrow: "OUR CORE PHILOSOPHY",
        title: "Quality over Mediocrity",
        description:
          "In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.",
        image: philosophyImage,
        alt: "W. Apparels production teams working across the factory floor",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  const goToPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + slides.length) % slides.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="W. Apparels featured content"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="hero-carousel__slides" aria-live="polite">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={slide.id}
              className={`hero-carousel__slide${isActive ? " hero-carousel__slide--active" : ""}`}
              aria-hidden={!isActive}
            >
              <img
                className="hero-carousel__image"
                src={slide.image}
                alt={isActive ? slide.alt : ""}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
              <div className="hero-carousel__overlay" />

              {slide.customContent ? (
                <PartnershipSlideContent />
              ) : (
                <StandardSlideContent slide={slide} />
              )}
            </article>
          );
        })}
      </div>

      <button
        type="button"
        className="hero-carousel__arrow hero-carousel__arrow--previous"
        onClick={goToPrevious}
        aria-label="Show previous slide"
      >
        <ArrowIcon direction="previous" />
      </button>

      <button
        type="button"
        className="hero-carousel__arrow hero-carousel__arrow--next"
        onClick={goToNext}
        aria-label="Show next slide"
      >
        <ArrowIcon direction="next" />
      </button>

      <div
        className="hero-carousel__dots"
        role="tablist"
        aria-label="Choose a hero slide"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            className={`hero-carousel__dot${index === activeIndex ? " hero-carousel__dot--active" : ""}`}
            aria-selected={index === activeIndex}
            aria-label={`Show slide ${index + 1} of ${slides.length}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
