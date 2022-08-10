import React from "react";
import { MdLocationOn } from "react-icons/md";
const DashboardUserAddress = () => {
  return (
    <div className="mb-6">
      <p className="mb-2 text-md text-gray-600">Your Address</p>
      <div className="flex items-center justify-between mb-3">
        <p className="flex items-center justify-start gap-3 font-semibold text-headingColor">
          <MdLocationOn className="text-xl text-orange-400" /> Eila House
        </p>
        <button className="py-1 px-2.5 font-medium outline-none hover:border-gray-500 hover:text-gray-500 text-xs rounded-md border border-orange-500 text-orange-500">
          Change
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        facilis natus animi
      </p>
      <div className="flex gap-3">
        <button className="py-1 px-2.5 font-medium outline-none text-sm hover:text-orange-400 hover:border-orange-400 rounded-md border border-gray-600 text-gray-600">
          Add details
        </button>
        <button className="py-1 px-2.5 font-medium outline-none text-sm hover:text-orange-400 hover:border-orange-400 rounded-md border border-gray-600 text-gray-600">
          Add note
        </button>
      </div>
    </div>
  );
};

export default DashboardUserAddress;
