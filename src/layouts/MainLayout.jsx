import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="relative md:px-8 lg:px-0 min-h-screen">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
