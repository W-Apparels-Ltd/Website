import React from 'react';
import img from '../images/component/1.Fabric Inspection.541e824c32644a20e41b.jpg'
import img2 from '../images/component/2.Sewing.70832ecf96f2535c281b.jpg'
import img3 from '../images/component/3.Cutting.e4029999841f631e4de3.jpg'
import img4 from '../images/component/4.Quality Assurance.c20716432dd3b6ccfb38.jpg'
import img5 from '../images/component/5.Sustainability & Development.864600b857945c36494b.jpg'
import img6 from '../images/component/6.PACKAGING.e6af01981eb2c90a3d8c.jpg'

const factoryItems = [
  {
    id: 1,
    title: 'Fabric Inspection',
    imgSrc: img,
  },
  {
    id: 2,
    title: 'Sewing',
    imgSrc: img2,
  },
  {
    id: 3,
    title: 'Cutting',
    imgSrc: img3,
  },
  {
    id: 4,
    title: 'Quality Assurance',
    imgSrc: img4,
  },
  {
    id: 5,
    title: 'Sustainability & Development',
    imgSrc: img5,
  },
  {
    id: 6,
    title: 'Packaging',
    imgSrc: img6,
  },
];

const FactoryComponent = () => {
  return (
    <div>
      <div className="bg-base-100 py-20 font-Nunito">
        <div className="lg:p-15 text-center">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
            Our Factory Component
          </h1>
        </div>

        <div className="mx-20 grid grid-cols-1 gap-2 justify-items-center justify-center md:grid-cols-3 lg:grid-cols-6">
          {factoryItems.map((item) => (
            <div key={item.id} className="group my-5 cursor-pointer lg:my-10">
              <div className="relative mt-10 max-w-xs grid justify-items-center overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="h-80 w-52 object-cover transition duration-700 ease-in-out hover:scale-125"
                  src={item.imgSrc}
                  alt={item.title}
                />
              </div>
              <div className="my-2 text-center">
                <span className="group text-xl font-bold text-gray-700">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactoryComponent;

