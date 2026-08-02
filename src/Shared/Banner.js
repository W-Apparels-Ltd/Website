import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import communityImage from '../images/factory_purpose/333333-1.jpg';
import careerImage from '../images/factory_purpose/ourstory-300x225-1.jpg';
import productImage from '../images/inventory/products.jpg';
import philosophyImage from '../images/factory_purpose/1.jpg';
import partnershipImage from '../images/Our1 (1).jpg';
import './Banner.css';

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
    {direction === 'previous' ? (
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

    <div className="hero-carousel__business-cards">
      <article className="hero-carousel__business-card">
        <div className="hero-carousel__card-icon" aria-hidden="true">⌂</div>
        <h2>Let&apos;s Do Business Together</h2>
        <p>
          Our promise is to keep strong commitments, deliver superior quality,
          and build lasting relationships in the global RMG sector.
        </p>
        <span>Prioritizing excellence over mass production.</span>
      </article>

      <article className="hero-carousel__business-card">
        <div className="hero-carousel__card-icon hero-carousel__card-icon--gold" aria-hidden="true">✓</div>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>30+ years of experience</li>
          <li>Quality-focused production</li>
          <li>Responsible manufacturing</li>
          <li>Consistent delivery standards</li>
        </ul>
      </article>

      <article className="hero-carousel__business-card">
        <div className="hero-carousel__card-icon hero-carousel__card-icon--blue" aria-hidden="true">✉</div>
        <h2>Get In Touch</h2>
        <ul className="hero-carousel__contact-list">
          <li><a href="tel:+8801853340765">+880 1853-340765</a></li>
          <li><a href="tel:+8801819274333">+880 1819-274333</a></li>
          <li><a href="mailto:info@wapparels.com">info@wapparels.com</a></li>
          <li>295/1A/4 Rayer Bazar, Dhaka-1209, Bangladesh</li>
        </ul>
      </article>
    </div>
  </div>
);

const Banner = () => {
  const slides = useMemo(
    () => [
      {
        id: 'partnership-contact',
        image: partnershipImage,
        alt: 'W. Apparels product collection prepared for business partners',
        customContent: true,
      },
      {
        id: 'community-impact',
        eyebrow: 'COMMUNITY & IMPACT',
        title: 'Empowering Local Businesses for a Thriving Community',
        description:
          'We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem.',
        image: communityImage,
        alt: 'Garments displayed in a local apparel business',
      },
      {
        id: 'career-culture',
        eyebrow: 'CAREER & CULTURE',
        title: 'Unlocking Potential: Creating Boundless Employment Opportunities',
        description:
          'We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.',
        image: careerImage,
        alt: 'W. Apparels team members collaborating around a meeting table',
        cta: { label: 'View Opportunities', to: '/career' },
      },
      {
        id: 'product-collection',
        eyebrow: 'PRODUCT COLLECTION',
        title: 'Unveiling Versatility: Elevate Your Wardrobe With Our Diverse Threads',
        description:
          'We take pride in crafting a diverse collection for every facet of your style. From tops and bottoms to sweaters and outerwear, our garments combine thoughtful design, dependable quality, and everyday versatility.',
        image: productImage,
        alt: 'A selection of W. Apparels garments on display',
        cta: { label: 'View Products', to: '/productgallery' },
      },
      {
        id: 'core-philosophy',
        eyebrow: 'OUR CORE PHILOSOPHY',
        title: 'Quality over Mediocrity',
        description:
          'In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.',
        image: philosophyImage,
        alt: 'W. Apparels production teams working across the factory floor',
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
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
              className={`hero-carousel__slide${isActive ? ' hero-carousel__slide--active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                className="hero-carousel__image"
                src={slide.image}
                alt={isActive ? slide.alt : ''}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
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

      <div className="hero-carousel__dots" role="tablist" aria-label="Choose a hero slide">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            className={`hero-carousel__dot${index === activeIndex ? ' hero-carousel__dot--active' : ''}`}
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
