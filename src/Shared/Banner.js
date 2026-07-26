import React from 'react';
import img from '../images/factory_purpose/1.jpg'
import img2a from '../images/factory_purpose/2.png'
import img3a from '../images/factory_purpose/3.jpeg'
import img4a from '../images/factory_purpose/4.jpg'
import img5a from '../images/factory_purpose/5.jpeg'
import img2 from '../images/factory_purpose/ourstory-300x225-1.jpg'
import img3 from '../images/factory_purpose/333333-1.jpg'
import img4 from '../images/inventory/products.jpg'

import { Button, Carousel, Typography, IconButton } from '@material-tailwind/react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Banner = () => {
  
  return (
    <Carousel
      autoplay={false}
      loop={true}
      /* Adjust '80px' to match your navbar height */
      className="h-full w-full"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 right-4 -translate-y-2/4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </IconButton>
      )}
    >
      {/* Slide 1 */}
    <div className="relative h-full min-h-screen w-full overflow-hidden">
      <img
        src={img}
        alt="WApparels Commitment"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Changed flex alignment from items-center to items-end with bottom padding */}
      <div className="absolute inset-0 bg-black/75 flex items-end justify-center p-6 md:p-10 lg:pb-16 lg:px-12">
        <div className="w-full max-w-7xl mx-auto max-h-full overflow-y-auto no-scrollbar">
          <div className="mb-4 lg:mb-6 text-center lg:text-left">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide"
            >
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden text-xl md:text-2xl font-bold tracking-wide"
            >
              Quality over Mediocrity
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-white text-left">
            {/* Col 1 */}
            <div className="bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15 flex flex-col justify-between">
              <div>
                <span className="inline-flex p-2 bg-emerald-500/20 text-emerald-400 rounded-xl mb-2 lg:mb-3">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <h3 className="text-base lg:text-xl font-bold text-white mb-2">Let's Do Business Together</h3>
                <p className="text-xs lg:text-sm text-gray-200 leading-relaxed opacity-90">
                  Our promise is to keep strong commitments, deliver superior quality, and build lasting relationships in the global RMG sector.
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-300">
                Prioritizing excellence over mass production.
              </div>
            </div>

            {/* Col 2 */}
            <div className="bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15">
              <h3 className="text-base lg:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Why Choose Us?
              </h3>
              <ul className="space-y-1.5 lg:space-y-2 text-xs lg:text-sm text-gray-200">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>30+ Years</strong> Of Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Best Quality Products</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Work with Sustainability</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Maintain Consistency</span>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-2xl border border-white/15 md:col-span-2 lg:col-span-1">
              <h3 className="text-base lg:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </h3>
              <div className="space-y-2 text-xs lg:text-sm text-gray-200">
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex flex-col">
                    <a href="tel:+8801853340765" className="hover:text-emerald-400 transition-colors">+880 1853-340765</a>
                    <a href="tel:+8801819274335" className="hover:text-emerald-400 transition-colors">+880 1819-274335</a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@wapparels.com" className="hover:text-blue-400 transition-colors underline decoration-blue-400/50">
                    info@wapparels.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="leading-snug">
                    295/JA/4 Rayer Bazar, Dhaka-1209, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slide 2a */}
<div className="relative h-screen w-full overflow-hidden">
  <img
    src={img2a}
    alt="Quality over Mediocrity"
    className="h-full w-full object-cover"
  />

  {/* Ambient Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/50 flex items-center justify-center p-6 md:p-10 lg:p-16">
    <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
      
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        Our Core Philosophy
      </div>

      {/* Heading */}
      <Typography
        variant="h1"
        color="white"
        className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mb-4 leading-snug drop-shadow-md"
      >
        <Slide direction="down">
          Quality over Mediocrity
        </Slide>
      </Typography>
      <Typography
        variant="h1"
        color="white"
        className="lg:hidden text-xl md:text-2xl font-bold mb-3 leading-snug drop-shadow-md"
      >
        Quality over Mediocrity
      </Typography>

      {/* Description */}
      <Typography
        variant="lead"
        color="white"
        className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl opacity-90 drop-shadow"
      >
        In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.
      </Typography>

    </div>
  </div>
</div>

{/* Slide 3a */}
<div className="relative h-screen w-full overflow-hidden">
  <img
    src={img3a}
    alt="Unveiling Versatility"
    className="h-full w-full object-cover"
  />

  {/* Ambient Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/50 flex items-center justify-center p-6 md:p-10 lg:p-16">
    <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
      
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        Product Collection
      </div>

      {/* Heading */}
      <Typography
        variant="h1"
        color="white"
        className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mb-4 leading-snug drop-shadow-md"
      >
        <Slide direction="down">
          Unveiling Versatility: Elevate Your Wardrobe With Our Diverse Threads - Tops, Bottoms, Sweaters And Beyond!
        </Slide>
      </Typography>
      <Typography
        variant="h1"
        color="white"
        className="lg:hidden text-xl md:text-2xl font-bold mb-3 leading-snug drop-shadow-md"
      >
        Unveiling Versatility: Elevate Your Wardrobe With Our Diverse Threads - Tops, Bottoms, Sweaters And Beyond!
      </Typography>

      {/* Description */}
      <Typography
        variant="lead"
        color="white"
        className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl opacity-90 mb-6 drop-shadow"
      >
        We take pride in crafting a diverse collection that caters to every facet of your style. With a keen eye for detail and a passion for fashion, we offer a range of exquisite tops, bottoms, and quality garments that effortlessly complement your individuality. From chic and casual to sophisticated and trendy, our designs are tailored to make you stand out in any crowd.
      </Typography>

      {/* Button */}
      <Link
        to="/productgallery"
        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95"
      >
        View Product
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

    </div>
  </div>
</div>

{/* Slide 4 */}
<div className="relative h-screen w-full overflow-hidden">
  <img
    src={img4a}
    alt="Employment Opportunities"
    className="h-full w-full object-cover"
  />

  {/* Ambient Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/50 flex items-center justify-center p-6 md:p-10 lg:p-16">
    <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
      
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        Career & Culture
      </div>

      {/* Heading */}
      <Typography
        variant="h1"
        color="white"
        className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mb-4 leading-snug drop-shadow-md"
      >
        <Slide direction="down">
          Unlocking Potential: Creating Boundless Employment Opportunities
        </Slide>
      </Typography>
      <Typography
        variant="h1"
        color="white"
        className="lg:hidden text-xl md:text-2xl font-bold mb-3 leading-snug drop-shadow-md"
      >
        Unlocking Potential: Creating Boundless Employment Opportunities
      </Typography>

      {/* Description */}
      <Typography
        variant="lead"
        color="white"
        className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl opacity-90 mb-6 drop-shadow"
      >
        We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.
      </Typography>

      {/* Button */}
      <Link
        to="/careers"
        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95"
      >
        View Opportunities
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

    </div>
  </div>
</div>

{/* Slide 5 */}
<div className="relative h-screen w-full overflow-hidden">
  <img
    src={img5a}
    alt="Empowering Local Businesses"
    className="h-full w-full object-cover"
  />

  {/* Ambient Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/50 flex items-center justify-center p-6 md:p-10 lg:p-16">
    <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
      
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        Community & Impact
      </div>

      {/* Heading */}
    <Typography
  variant="h1"
  color="white"
  className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mb-4 leading-snug drop-shadow-md text-center mx-auto"
>
  <Fade>
    Empowering Local Businesses for a Thriving Community
  </Fade>
</Typography>

      {/* Description */}
      <Typography
        variant="lead"
        color="white"
        className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl opacity-90 drop-shadow"
      >
        We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem.
      </Typography>

    </div>
  </div>
</div>


    </Carousel>
  );
};

export default Banner;
