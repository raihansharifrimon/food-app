import React from "react";
import Devlivery from "../../assets/images/delivery.png";
import HeroImage from "../../assets/images/heroBg.png";
import { heroData } from "../../utils/data";

const HomeMainContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 gap-6 flex flex-col items-start justify-center">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className=" w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Devlivery}
              className="w-full h-full object-contain"
              alt="delivery-icon"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The fastest Delivery in{" "}
          <span className="text-orange-500 text-[3rem] lg:text-[5rem]">
            Your city
          </span>
        </p>

        <p className="text-base md:w-[80%] text-textColor text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eum
          saepe ullam tenetur ducimus, facilis harum. Nihil ad sapiente adipisci
          placeat illum odit labore, totam rerum eveniet itaque quia cupiditate!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1">
        <div className="w-full flex items-center justify-end relative">
          <img
            src={HeroImage}
            className="h-420 w-full lg:w-auto lg:h-650"
            alt="Heroimage"
          />

          <div className="w-full h-full absolute top-0 left-0 lg:px-32 py-4 flex flex-wrap gap-4 drop-shadow-lg items-center justify-center">
            {heroData &&
              heroData.map((data) => (
                <div
                  key={data.id}
                  className="w-125 sm:w-150 lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center"
                >
                  <img
                    src={data.image}
                    className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                    alt={data.name}
                  />
                  <p className="text-[15px] lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor">
                    {data.name}
                  </p>
                  <p className="text-[10px] lg:text-sm  text-lightTextGray font-semibold my-1 lg:my-3">
                    {data.decp}
                  </p>

                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span> {data.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMainContainer;
