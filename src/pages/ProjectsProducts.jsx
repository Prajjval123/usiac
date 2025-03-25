import React, { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    description:
      "Fiberglass Animal Statue installed at Kolkata, India. Desgining, modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
    category: "SCULPTURE",
    subcategory: "Type A",
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Abstract Mild Steel Sculpture installed at Aurobindo Marg New Delhi, India. Desgining, modelling, Fabrication is done by our Artists in our workshop.",
    image: "/assets/projectproducts/product2.jpg",
    category: "PAINTING",
    subcategory: "Type B",
  },
  {
    id: 3,
    title: "Product 3",
    description:
      "Copper Repousse and Engraving Work, Size 13 feet x 7 feet. Installed at EIL- Engineers India Liited, Gurgoan.",
    image: "/assets/projectproducts/product3.jpg",
    category: "STATUE",
    subcategory: "Type C",
  },
  {
    id: 4,
    title: "Product 4",
    description:
      "Fiberglass Animal Statue installed at Kolkata, India. Desgining, modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
    category: "SCULPTURE",
    subcategory: "Type D",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Black Granite Statue",
    image: "/assets/projectproducts/product2.jpg",
    category: "STATUE",
    subcategory: "Type C",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Ganesha Stone statue 8 ft height",
    image: "/assets/projectproducts/product3.jpg",
    category: "STATUE",
    subcategory: "Type A",
  },
  {
    id: 7,
    title: "Product 7",
    description:
      "Fiberglass Animal Statue installed at Kolkata, India. Desgining, modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
    category: "SCULPTURE",
    subcategory: "Type A",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Black Granite Statue",
    image: "/assets/projectproducts/product2.jpg",
    category: "STATUE",
    subcategory: "Type B",
  },
  {
    id: 9,
    title: "Product 9",
    description: "Ganesha Stone statue 8 ft height",
    image: "/assets/projectproducts/product3.jpg",
    category: "STATUE",
    subcategory: "Type C",
  },
  {
    id: 10,
    title: "Product 10",
    description:
      "Fiberglass Animal Statue installed at Kolkata, India. Desgining, modelling and casting is done by our Artists.",
    image: "/assets/projectproducts/product1.jpg",
    category: "SCULPTURE",
    subcategory: "Type D",
  },
  {
    id: 11,
    title: "Product 11",
    description: "Black Granite Statue",
    image: "/assets/projectproducts/product2.jpg",
    category: "STATUE",
    subcategory: "Type B",
  },
  {
    id: 12,
    title: "Product 12",
    description: "Ganesha Stone statue 8 ft height",
    image: "/assets/projectproducts/product3.jpg",
    category: "STATUE",
    subcategory: "Type C",
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-black text-white  rounded-xl border cursor-pointer border-gray-700 h-[34rem] shadow-md overflow-hidden hover:shadow-2xl hover:shadow-[#e4005e] hover:transition-transform hover:translate-z-72 hover: transition-shadow duration-300">
    <div className="relative p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[18rem] object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#ff0080]">{product.title}</h3>
      <p className="text-gray-300 mt-2 text-justify">{product.description}</p>
    </div>
  </div>
);


const ProjectsProducts = () => {
  const [category, setCategory] = useState("Any Category");
  const [subcategory, setSubcategory] = useState("All Subcategory");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = dummyProducts.filter((product) => {
    const matchCategory =
      category === "Any Category" || product.category === category;
    const matchSubcategory =
      subcategory === "All Subcategory" || product.subcategory === subcategory;
    const matchSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSubcategory && matchSearch;
  });

  const handleSearch = () => {
    console.log("Searching for:", { category, subcategory, searchQuery });
  };

  return (
    <div
      className="min-h-screen bg-black text-white py-12 bg-center"
      style={{ backgroundImage: "url('/assets/bg-image1.png')" }}
    >
      <div className="mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-[#e4005e] mb-10 uppercase">
          Projects &amp; Products
        </h1>
        <div className="space-y-8">
          {/* Search & Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-4 px-4 md:px-24 rounded-lg w-full bg-gray-900">
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none px-4 py-3 border border-gray-500 bg-black text-white rounded min-w-[12rem] transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080] focus:ring-2 focus:ring-[#ff0080] pr-8 text-sm"
              >
                <option>Any Category</option>
                <option>SCULPTURE</option>
                <option>PAINTING</option>
                <option>STATUE</option>
                <option>MURAL</option>
                <option>OTHERS</option>
              </select>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-300 text-xs">
                ▼
              </span>
            </div>

            <div className="relative">
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="appearance-none px-4 py-3 border border-gray-500 bg-black text-white rounded min-w-[12rem] transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080] focus:ring-2 focus:ring-[#ff0080] pr-8 text-sm"
              >
                <option>All Subcategory</option>
              </select>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-300 text-xs">
                ▼
              </span>
            </div>

            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-3 border border-gray-500 bg-black text-white rounded flex-grow transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080] text-sm min-w-[20rem]"
            />

            <div className="group relative inline-block">
              <button
                onClick={handleSearch}
                className="relative z-10 px-6 py-3 text-white text-sm font-bold uppercase tracking-widest border-2 border-[#ff0080] rounded-md overflow-hidden transition-all duration-1000 hover:scale-110 hover:border-[#ff0080] hover:text-white shadow-md hover:shadow-lg"
              >
                <span className="absolute left-[-50px] top-0 h-full w-0 bg-[#ff0080] skew-x-[45deg] transition-all duration-1000 group-hover:w-[250%] -z-10"></span>
                Search
              </button>
            </div>

            <div className="group relative inline-block">
              <button
                onClick={() => {
                  setCategory("Any Category");
                  setSubcategory("All Subcategory");
                  setSearchQuery("");
                }}
                className="relative z-10 px-6 py-3 text-white text-sm font-bold uppercase tracking-widest border-2 border-gray-300 rounded-md overflow-hidden transition-all duration-1000 hover:scale-110 hover:border-gray-400 hover:text-black shadow-md hover:shadow-lg"
              >
                <span className="absolute left-[-50px] top-0 h-full w-0 bg-gray-300 skew-x-[45deg] transition-all duration-1000 group-hover:w-[250%] -z-10"></span>
                Reset
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsProducts;
