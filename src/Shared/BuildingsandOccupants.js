import React from 'react';
import img from '../images/factory_purpose/building.jpg'
import img1 from '../images/factory_purpose/888888.jpg'
import img2 from '../images/factory_purpose/333333-1.jpg'
import arrow from '../images/Untitled__1_-removebg-preview.png'
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const buildingData = [
  {
    id: 1,
    title: 'W. Apparels Ltd.',
    path: '/building1',
    image: img,
  },
  {
    id: 2,
    title: 'Quality Apparels',
    path: '/building2',
    image: img1,
  },
  {
    id: 3,
    title: '3NA Fashion',
    path: '/building3',
    image: img2,
  },
];

const BuildingsandOccupants = () => {
  return (
    <div className="bg-base-100 py-10 font-Nunito">
      <div className="mb-10 text-center lg:p-15">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
          Buildings and Occupants
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-0 justify-items-center justify-center md:grid-cols-2 lg:grid-cols-3">
        {buildingData.map((building) => (
          <div
            key={building.id}
            className="group relative m-3 h-[450px] w-full cursor-pointer flex items-center justify-center overflow-hidden bg-cover shadow-xl"
          >
            {/* Background Image with Hover Scale */}
            <img
              className="absolute h-full w-full transform bg-cover bg-center object-cover transition-all duration-500 ease-in-out group-hover:scale-150"
              src={building.image}
              alt={building.title}
            />

            {/* Dark Overlay */}
            <div className="h-full w-full bg-black/75 opacity-50"></div>

            {/* Hover Overlay Link */}
            <Link to={building.path}>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black/50 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
            </Link>

            {/* Card Title Link */}
            <h1 className="absolute transform scale-150 text-2xl font-black text-white opacity-90 transition-all duration-500 ease-in-out">
              <Link to={building.path}>{building.title}</Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingsandOccupants;
