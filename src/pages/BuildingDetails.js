import React from 'react';
import { Link } from 'react-router-dom';
import { getBuildingById } from '../data/buildings';

const BuildingDetails = ({ buildingId }) => {
  const building = getBuildingById(buildingId);


  if (!building) {
    return null;
  }

  return (
    <main className="bg-base-100 font-Nunito text-gray-900">
      <section
        className="relative min-h-[430px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(7, 12, 66, 0.50), rgba(0, 0, 77, 0.90)), url(${building.image})`,
        }}
      >
        <div className="mx-auto flex min-h-[430px] w-full max-w-7xl items-end px-5 pb-14 pt-32 lg:px-20">
          <div className="max-w-3xl text-white">
            <Link
              to="/building"
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              All Buildings
            </Link>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-white/75">
              Building {building.number}
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {building.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
              {building.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr] lg:px-20 lg:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#000066]">Factory Overview</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">About this facility</h2>
          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">{building.overview}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {building.facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">{fact.label}</p>
                <p className="mt-2 text-lg font-bold text-[#000066]">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit overflow-hidden rounded-2xl bg-[#000066] text-white shadow-xl">
          <img src={building.image} alt={`${building.name} factory`} className="h-64 w-full object-cover" />
          <div className="p-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/65">Company Profile</p>
            <h2 className="mt-3 text-2xl font-bold">View the official profile</h2>
            <p className="mt-3 leading-7 text-white/80">
              Open the W. Apparels company profile for company information, facilities, products and certifications.
            </p>
            <a
              href="/WapparelsPDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#000066] transition hover:bg-gray-100"
            >
              Open Our Profile
            </a>
          </div>
        </aside>
      </section>

      {building.sections.length > 0 && (
        <section className="bg-gray-50">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-20 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#000066]">Inside the Factory</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Factory sections</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {building.sections.map((section) => (
                <article key={section.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{section.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto w-full max-w-7xl px-5 py-14 lg:px-20 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#000066]">Our Commitment</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Operational standards</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {building.standards.map((standard) => (
            <article key={standard.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[#000066]" />
              <h3 className="text-xl font-bold">{standard.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{standard.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-gray-100 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Explore the other facilities</h2>
            <p className="mt-2 text-gray-600">Return to the buildings overview to view every listed facility.</p>
          </div>
          <Link
            to="/building"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#000066] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#00004d]"
          >
            View All Buildings
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BuildingDetails;
