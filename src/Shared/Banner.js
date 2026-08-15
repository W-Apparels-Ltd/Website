import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import communityImage from "../images/hero/2.png";
import careerImage from "../images/hero/4.jpg";
import productImage from "../images/hero/3.jpeg";
import philosophyImage from "../images/hero/5.jpg";
import partnershipImage from "../images/hero/1.jpg";
import "./Banner.css";
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

const AUTOPLAY_DELAY_MS = 5000;

const partnershipHighlights = [
  {
    id: "business-together",
    icon: Building2,
    title: "Let's Do Business Together",
    description:
      "Our promise is to keep strong commitments, deliver superior quality, and build lasting relationships in the global RMG sector.",
    footer: "Prioritizing excellence over mass production.",
    iconWrapperClassName:
      "inline-flex p-2 bg-emerald-500/20 text-emerald-400 rounded-xl mb-2 lg:mb-3",
    iconClassName: "w-5 h-5 lg:w-6 lg:h-6",
  },
];

const whyChooseUsItems = [
  {
    id: "experience",
    icon: Award,
    iconClassName: "w-5 h-5 text-amber-400 shrink-0",
    label: (
      <span>
        <strong>30+ Years</strong> of Experience
      </span>
    ),
  },
  {
    id: "quality",
    icon: ShieldCheck,
    iconClassName: "w-5 h-5 text-emerald-400 shrink-0",
    label: "Premium Quality Products",
  },
  {
    id: "sustainability",
    icon: Leaf,
    iconClassName: "w-5 h-5 text-green-400 shrink-0",
    label: "Committed to Sustainability",
  },
  {
    id: "standards",
    icon: Layers3,
    iconClassName: "w-5 h-5 text-sky-400 shrink-0",
    label: "Consistent Manufacturing Standards",
  },
];

const contactDetails = [
  {
    id: "phone",
    icon: Phone,
    iconClassName: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5",
    type: "tel",
    value: "+880 1853-340765",
    secondaryValue: "+880 1819-274335",
  },
  {
    id: "email",
    icon: Mail,
    iconClassName: "w-4 h-4 text-blue-400 shrink-0",
    type: "email",
    value: "info@wapparels.com",
  },
  {
    id: "address",
    icon: MapPin,
    iconClassName: "w-4 h-4 text-rose-400 shrink-0 mt-0.5",
    type: "address",
    value: "295/JA/4 Rayer Bazar, Dhaka-1209, Bangladesh",
  },
];

const ArrowIcon = ({ direction }) =>
  direction === "previous" ? (
    <ChevronLeft aria-hidden="true" className="hero-carousel__arrow-icon" />
  ) : (
    <ChevronRight aria-hidden="true" className="hero-carousel__arrow-icon" />
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

    <div className="hero-carousel__business-cards lg:h-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-white text-left">
      {partnershipHighlights.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.id}
            className="hero-carousel__business-card bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15 flex flex-col justify-between"
          >
            <div>
              <span className={item.iconWrapperClassName} aria-hidden="true">
                <Icon className={item.iconClassName} />
              </span>
              <h3 className="text-base lg:text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs lg:text-sm text-gray-200 leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-300">
              {item.footer}
            </div>
          </article>
        );
      })}

      <article className="hero-carousel__business-card bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15">
        <h3 className="flex items-center gap-2 mb-4 text-base font-bold text-white lg:text-xl">
          <BadgeCheck className="w-5 h-5 text-amber-400 lg:w-6 lg:h-6" />
          Why Choose Us?
        </h3>

        <ul className="space-y-3 text-xs text-gray-200 lg:text-sm">
          {whyChooseUsItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id} className="flex items-center gap-3">
                <Icon className={item.iconClassName} />
                {item.label}
              </li>
            );
          })}
        </ul>
      </article>

      <article className="hero-carousel__business-card bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15 md:col-span-2 lg:col-span-1">
        <h3 className="text-base lg:text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Mail
            className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400"
            aria-hidden="true"
          />
          Get In Touch
        </h3>
        <div className="space-y-2 text-xs lg:text-sm text-gray-200">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            if (item.type === "tel") {
              return (
                <div key={item.id} className="flex items-start gap-2.5">
                  <Icon className={item.iconClassName} aria-hidden="true" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+8801853340765"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {item.value}
                    </a>
                    {item.secondaryValue && (
                      <a
                        href="tel:+8801819274335"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        {item.secondaryValue}
                      </a>
                    )}
                  </div>
                </div>
              );
            }

            if (item.type === "email") {
              return (
                <div key={item.id} className="flex items-center gap-2.5">
                  <Icon className={item.iconClassName} aria-hidden="true" />
                  <a
                    href="mailto:info@wapparels.com"
                    className="hover:text-blue-400 transition-colors underline decoration-blue-400/50"
                  >
                    {item.value}
                  </a>
                </div>
              );
            }

            return (
              <div key={item.id} className="flex items-start gap-2.5">
                <Icon className={item.iconClassName} aria-hidden="true" />
                <span className="leading-snug">{item.value}</span>
              </div>
            );
          })}
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
                fetchpriority={index === 0 ? "high" : "auto"}
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
