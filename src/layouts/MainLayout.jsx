import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="relative md:px-8 lg:px-0 min-h-screen">
        <img
          src="/assets/additional_images/left_top_design.png"
          alt="Background Decor"
          className="absolute top-0 left-0 w-3/6 opacity-30"
        />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
