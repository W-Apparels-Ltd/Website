import React from "react";
import pic from "../images/factory_purpose/1.jpg";
import Dr from "../images/personnel/team-1.png";
import { corporateStaff, directors } from "../data/team";

const MeetTheTeam = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
      }}
      className="mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg font-Nunito"
    >
      <div>
        <div className="pb-10 pt-20 text-center">
          <h1 className="lg:text-5xl text-3xl text-white font-bold mt-5">
            Meet Our Leaders
          </h1>
        </div>
      </div>
      <div className="lg:mt-20 mt-10 rounded-xl">
        <div className="bg-base-200 ">
          <div className=" bg-base-200 px-10 pt-20">
            <div className="text-center">
              <h1 className="lg:text-4xl text-3xl font-bold">Chairman</h1>
            </div>
            <div className="grid  grid-cols justify-items-center justify-center  m-5">
              <div className="text-center">
                <div className="my-4">
                  <h1 className="lg:text-4xl text-2xl md:text-3xl italic text-gray-700 font-bold">
                    Nigher Sultana
                  </h1>
                  <p className="text-xl">
                    At last but not the least we wish a friendly global business
                    relationship in days to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-base-200 px-10 pt-20">
            <div className="text-center">
              <h1 className="lg:text-4xl text-3xl font-bold">
                Managing Director
              </h1>
            </div>
            <div className="grid  grid-cols justify-items-center justify-center  m-5">
              <div className="text-center">
                <div className="grid justify-items-center mt-10">
                  <img
                    className="w-48 h-48 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    src={Dr}
                    alt=""
                  />
                </div>
                <div className="my-4">
                  <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">
                    Akhter Hossain
                  </h1>
                  <p className="text-xl">
                    At last but not the least we wish a friendly global business
                    relationship in days to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base-200  pt-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Directors</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 max-w-7xl mx-auto">
              {directors.map((dir) => (
                <div className="text-center" key={dir.id}>
                  <div className="grid justify-items-center mt-10">
                    <img
                      className="w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src={dir.img}
                      alt={dir.name}
                    />
                  </div>
                  <div className="my-4">
                    <h1 className="lg:text-3xl text-2xl md:text-3xl font-bold">
                      {dir.name}
                    </h1>
                    {dir.title && (
                      <p className="text-xl text-gray-700 font-bold">
                        {dir.title}
                      </p>
                    )}
                    {dir.desc && <p className="text-xl">{dir.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-base-200 pt-10">
            <div className="text-center">
              <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">
                Corporate Staff
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center">
              {corporateStaff.map((member) => (
                <div className="text-center m-5" key={member.id}>
                  <div className="grid justify-items-center mt-10">
                    <img
                      className="w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src={member.img}
                      alt={member.name}
                    />
                  </div>
                  <div className="my-4">
                    <h1 className="text-xl lg:text-3xl font-bold">
                      {member.name}
                    </h1>
                    {member.title && (
                      <p className="text-xl font-bold text-gray-700">
                        {member.title}
                      </p>
                    )}
                    {member.desc && <p className="text-xl">{member.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
