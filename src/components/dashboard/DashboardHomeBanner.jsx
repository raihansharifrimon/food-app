import React, { useState } from "react";

const weekPlans = [
  {
    id: 1,
    name: "Delax",
    description: "750 kcal",
  },
  {
    id: 2,
    name: "Decreasing",
    description: "1050 kcal",
  },
  {
    id: 3,
    name: "Decreasing",
    description: "850 kcal",
  },
  {
    id: 4,
    name: "Decreasing",
    description: "650 kcal",
  },
];

const DashboardHomeBanner = () => {
  const [isActive, setIsActive] = useState(0);

  const handleChange = (id) => {
    setIsActive(id);
  };

  return (
    <div className="bg-dashboardCardBg p-5 md:p-6 rounded-2xl mb-6">
      <h2 className="text-headingColor text-lg md:text-2xl font-semibold mb-1">
        Create a weekly meal plan
      </h2>
      <p className="text-textColor text-sm">Select a preferable programme</p>
      <div className="mt-6 w-full flex items-center flex-wrap justify-start gap-2 md:gap-3">
        {weekPlans &&
          weekPlans.map((plan, idx) => (
            <button
              key={plan.id}
              onClick={() => handleChange(idx)}
              className={`${
                idx === isActive ? "bg-orange-400" : "bg-white"
              } group w-[100px] md:w-40 h-[75px] flex flex-col gap-1 items-start justify-center rounded-md hover:bg-orange-400 focus:outline-none cursor-pointer px-3 py-4 transition duration-75 ease-in-out`}
            >
              <p
                className={`${
                  idx === isActive ? "text-white" : "text-gray-500"
                } group-hover:text-white text-sm`}
              >
                {plan.name}
              </p>
              <p
                className={`${
                  idx === isActive ? "text-white" : "text-gray-900"
                } group-hover:text-white font-semibold text-base`}
              >
                {plan.description}
              </p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default DashboardHomeBanner;
