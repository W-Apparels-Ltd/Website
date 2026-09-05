import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  Leaf,
  Layers3,
  BadgeCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import communityImage from "../images/hero/2.png";
import careerImage from "../images/hero/4.jpg";
import productImage from "../images/hero/3.jpeg";
import philosophyImage from "../images/hero/5.jpg";
import partnershipImage from "../images/hero/1.jpg";

import "./Banner.css";

const AUTOPLAY_DELAY_MS = 5000;

const partnershipHighlights = [
  {
    id: "business-together",
    icon: Building2,
    title: "Let's Do Business Together",
    description:
      "Our promise is to keep strong commitments, deliver superior quality, and build lasting relationships in the global RMG sector.",
    footer: "Prioritizing excellence over mass production.",
  },
];

const whyChooseUsItems = [
  {
    id: "experience",
    icon: Award,
    tone: "amber",
    label: (
      <>
        <strong>30+ Years</strong> of Experience
      </>
    ),
  },
  {
    id: "quality",
    icon: ShieldCheck,
    tone: "emerald",
    label: "Premium Quality Products",
  },
  {
    id: "sustainability",
    icon: Leaf,
    tone: "green",
    label: "Committed to Sustainability",
  },
  {
    id: "standards",
    icon: Layers3,
    tone: "blue",
    label: "Consistent Manufacturing Standards",
  },
];

const contactDetails = [
  {
    id: "phone",
    icon: Phone,
    tone: "emerald",
    type: "tel",
    value: "+880 1853-340765",
    href: "tel:+8801853340765",
    secondaryValue: "+880 1819-274335",
    secondaryHref: "tel:+8801819274335",
  },
  {
    id: "email",
    icon: Mail,
    tone: "blue",
    type: "email",
    value: "info@wapparels.com",
    href: "mailto:info@wapparels.com",
  },
  {
    id: "address",
    icon: MapPin,
    tone: "rose",
    type: "address",
    value: "295/JA/4 Rayer Bazar, Dhaka-1209, Bangladesh",
  },
];

const slides = [
  {
    id: "partnership-contact",
    image: partnershipImage,
    alt: "W. Apparels product collection prepared for business partners",
    customContent: true,
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
    cta: {
      label: "View Products",
      to: "/productgallery",
    },
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
    cta: {
      label: "View Opportunities",
      to: "/career",
    },
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
    id: "core-philosophy",
    eyebrow: "OUR CORE PHILOSOPHY",
    title: "Quality over Mediocrity",
    description:
      "In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.",
    image: philosophyImage,
    alt: "W. Apparels production teams working across the factory floor",
  },
];

const ArrowIcon = ({ direction }) =>
  direction === "previous" ? (
    <ChevronLeft
      aria-hidden="true"
      className="hero-carousel__arrow-icon"
    />
  ) : (
    <ChevronRight
      aria-hidden="true"
      className="hero-carousel__arrow-icon"
    />
  );

const StandardSlideContent = ({ slide }) => (
  <div className="hero-carousel__content">
    <div className="hero-carousel__eyebrow">
      <span className="hero-carousel__eyebrow-dot" />
      {slide.eyebrow}
    </div>

    <h1 className="hero-carousel__title">
      {slide.title}
    </h1>

    <p className="hero-carousel__description">
      {slide.description}
    </p>

    {slide.cta && (
      <Link
        className="hero-carousel__cta"
        to={slide.cta.to}
      >
        {slide.cta.label}

        <span aria-hidden="true">
          →
        </span>
      </Link>
    )}
  </div>
);

const PartnershipSlideContent = () => (
  <div className="hero-carousel__partnership-layout">
    <div className="hero-carousel__partnership-heading">
      <div className="hero-carousel__eyebrow">
        <span className="hero-carousel__eyebrow-dot" />
        PARTNERSHIP &amp; CONTACT
      </div>

      <h1 className="hero-carousel__title hero-carousel__title--partnership">
        Let&apos;s Build Lasting Business Together
      </h1>
    </div>

    <div className="hero-carousel__business-cards">
      {partnershipHighlights.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.id}
            className="hero-carousel__business-card hero-carousel__business-card--primary"
          >
            <div>
              <span className="hero-carousel__card-main-icon">
                <Icon aria-hidden="true" />
              </span>

              <h2 className="hero-carousel__business-card-title">
                {item.title}
              </h2>

              <p className="hero-carousel__business-card-description">
                {item.description}
              </p>
            </div>

            <div className="hero-carousel__business-card-footer">
              {item.footer}
            </div>
          </article>
        );
      })}

      <article className="hero-carousel__business-card hero-carousel__business-card--benefits">
        <h2 className="hero-carousel__business-card-heading">
          <BadgeCheck
            className="hero-carousel__heading-icon hero-carousel__icon--amber"
            aria-hidden="true"
          />

          <span>Why Choose Us?</span>
        </h2>

        <ul className="hero-carousel__benefit-list">
          {whyChooseUsItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <Icon
                  className={`hero-carousel__list-icon hero-carousel__icon--${item.tone}`}
                  aria-hidden="true"
                />

                <span>
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </article>

      <article className="hero-carousel__business-card hero-carousel__business-card--contact">
        <h2 className="hero-carousel__business-card-heading">
          <Mail
            className="hero-carousel__heading-icon hero-carousel__icon--blue"
            aria-hidden="true"
          />

          <span>Get In Touch</span>
        </h2>

        <div className="hero-carousel__contact-list">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            if (item.type === "tel") {
              return (
                <div
                  key={item.id}
                  className="hero-carousel__contact-item"
                >
                  <Icon
                    className={`hero-carousel__contact-icon hero-carousel__icon--${item.tone}`}
                    aria-hidden="true"
                  />

                  <div className="hero-carousel__contact-values">
                    <a href={item.href}>
                      {item.value}
                    </a>

                    {item.secondaryValue && (
                      <a href={item.secondaryHref}>
                        {item.secondaryValue}
                      </a>
                    )}
                  </div>
                </div>
              );
            }

            if (item.type === "email") {
              return (
                <div
                  key={item.id}
                  className="hero-carousel__contact-item"
                >
                  <Icon
                    className={`hero-carousel__contact-icon hero-carousel__icon--${item.tone}`}
                    aria-hidden="true"
                  />

                  <a href={item.href}>
                    {item.value}
                  </a>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="hero-carousel__contact-item hero-carousel__contact-item--address"
              >
                <Icon
                  className={`hero-carousel__contact-icon hero-carousel__icon--${item.tone}`}
                  aria-hidden="true"
                />

                <span>
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  </div>
);

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (isPaused || prefersReducedMotion.matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) =>
          (currentIndex + 1) % slides.length,
      );
    }, AUTOPLAY_DELAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused]);

  const goToPrevious = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + slides.length) %
        slides.length,
    );
  };

  const goToNext = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + 1) % slides.length,
    );
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
      <div
        className="hero-carousel__slides"
        aria-live="polite"
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={slide.id}
              className={`hero-carousel__slide${
                isActive
                  ? " hero-carousel__slide--active"
                  : ""
              }`}
              aria-hidden={!isActive}
            >
              <img
                className="hero-carousel__image"
                src={slide.image}
                alt={isActive ? slide.alt : ""}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={
                  index === 0 ? "high" : "auto"
                }
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
            className={`hero-carousel__dot${
              index === activeIndex
                ? " hero-carousel__dot--active"
                : ""
            }`}
            aria-selected={index === activeIndex}
            aria-label={`Show slide ${index + 1} of ${
              slides.length
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;