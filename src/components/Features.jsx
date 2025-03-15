import React from "react";

const Features = () => {
  const features = [
    { title: "Fast", description: "Optimized for speed and performance." },
    { title: "Responsive", description: "Looks great on any device." },
    { title: "Modern", description: "Built with the latest tools and frameworks." },
  ];

  return (
    <section id="features" className="bg-gray-900 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-md text-center"
          >
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
