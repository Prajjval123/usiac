import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import {mainServices} from "../constants/utils"

const Services = () => {
  const navigate = useNavigate();
  // const { mainServices, loading } = useContext(GlobalContext);

  // if (loading) return <div>Loading services...</div>;

  if (!mainServices) {
    return <div>No service data found.</div>;
  }

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="p-8 lg:p-16 flex flex-col gap-8 ">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-center animate-fade-in">
        Services & Domains
      </h1>
      {/* services */}

      <div className="mt-2 rounded p-4 animate-popup">
        <div className="flex flex-col gap-4">
          {/* IT Services */}
          <div>
            {mainServices?.IT_Services?.map((service) => (
              <div key={service.name}>
                <h4 className="font-semibold md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left border-b pb-2">
                  {service.name}
                </h4>
                <ul className="space-y-1 pt-2">
                  {service.value.map((value) => (
                    <li
                      key={value.name}
                      className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                      onClick={() => handleServiceClick(value.route)}
                    >
                      {value.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* GIS Services */}
          <div className="flex flex-col">
            <div>
              {mainServices?.GIS_Services?.map((service) => (
                <div key={service.name}>
                  <h4 className="font-semibold md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left border-b pb-2 mb-2 ">
                    {service.name}
                  </h4>
                  <div className="flex flex-col gap-2 pt-2">
                    <ul className="flex flex-col gap-2 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                      <li className="space-y-1">
                        {service?.value1?.map((value) => (
                          <div
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </div>
                        ))}
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-2 w-full">
                      <li className="space-y-1">
                        {service?.value2?.map((value) => (
                          <div
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </div>
                        ))}
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-2 w-full">
                      <li className="space-y-1">
                        {service?.value3?.map((value) => (
                          <div
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </div>
                        ))}
                      </li>
                    </ul>
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

export default Services;
