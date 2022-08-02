import React from "react";
import bakery from "../../assets/icons/bakery.png";
import beverage from "../../assets/icons/beverage.png";
import burger from "../../assets/icons/burger.png";
import chicken from "../../assets/icons/chicken.png";
import coffee from "../../assets/icons/coffee.png";
import juice from "../../assets/icons/juice.png";
import pizza from "../../assets/icons/pizza.png";
import roastChicken from "../../assets/icons/roast-chicken.png";
import seaFoods from "../../assets/icons/sea-foods.png";

const categories = {
  maxLimit: 8,
  data: [
    {
      id: 1,
      name: "Bakery",
      avatar: bakery,
    },
    {
      id: 2,
      name: "Burger",
      avatar: burger,
    },
    {
      id: 3,
      name: "Beverage",
      avatar: beverage,
    },
    {
      id: 4,
      name: "Chicken",
      avatar: chicken,
    },
    {
      id: 5,
      name: "Pizza",
      avatar: pizza,
    },
    {
      id: 6,
      name: "Coffee",
      avatar: coffee,
    },
    {
      id: 7,
      name: "Roast",
      avatar: roastChicken,
    },
    {
      id: 8,
      name: "See Foods",
      avatar: seaFoods,
    },
    {
      id: 9,
      name: "Juice",
      avatar: juice,
    },
  ],
};

const DashboardCategories = () => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between">
      <ul className="flex items-center justify-start flex-wrap gap-3 h-24 overflow-hidden">
        {categories.data &&
          categories.data.slice(0, categories.maxLimit).map((cat) => (
            <li
              key={cat.id}
              className="group w-28 h-24 flex flex-col items-center justify-center gap-1 p-2 rounded-md bg-gray-100 cursor-pointer hover:bg-orange-400 transition-all duration-100 ease-in-out"
            >
              <img
                className="w-12 h-12 object-contain"
                src={cat.avatar}
                alt="icon"
              />
              <p className="group-hover:text-white text-base text-gray-500 font-normal">
                {cat.name}
              </p>
            </li>
          ))}
      </ul>
      {categories.data?.length > categories.maxLimit && (
        <button className="group sm:w-min w-full outline-none inline-flex items-center justify-center px-2.5 py-2 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-orange-500 drop-shadow-sm transition-all duration-100 ease-in-out">
          <p className="group-hover:text-white text-base text-textColor whitespace-nowrap">
            See all
          </p>
        </button>
      )}
    </div>
  );
};

export default DashboardCategories;
