import React from 'react';
import img from '../images/factory_purpose/4444.jpg'

const BuildingsandOccupants = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100 px-20">
        <div className="hero-content flex-col lg:flex-row-reverse lg:items-center">
          <img src={img} className="w-2/5 rounded-lg shadow-2xl" />
          <div className='pe-20' >
            <h1 className="text-5xl text-primary font-bold">Buildings and Occupants</h1>
            <p className="py-6 text-xl">W.Apparels New Generation Apparels is a compliant Woven/knitwear manufacturer based in Bangladesh and is a project of W.Apparels. The company was set up in 1992 to provide one stop manufacturing service to the fashion industry ensuring quality, reliability, sustainability and social responsibility. The founder is A.M Akhter Hossain who is a prominent business man in the country known for his ethical business practices. The industry has an yearly production capacity of 48,00,000 lac pice (4.8 million pieces) of knitwear and 36,00,000 lac pice (3.6 million pieces). The factory is well equipped with latest manufacturing.</p>
            <a className="btn">Read More</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BuildingsandOccupants;
