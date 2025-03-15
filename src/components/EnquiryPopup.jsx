import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnquiryPopup = ({ setShowPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    leadTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    toast.success("Enquiry submitted successfully!");
    setTimeout(() => setShowPopup(false), 2000); // Auto-close popup after 2s
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-[550px] relative">
          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          >
            ×
          </button>

          {/* Form Title */}
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Enquiry Form</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 text-gray-700">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Explain your need..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none h-24"
              required
            />

            {/* Lead Time Selection */}
            <label className="block font-medium mt-3 text-gray-800">Lead time to engage IT Service provider:</label>
            <div className="grid grid-cols-2 gap-4">
              {["Immediate", "2 - 4 Days", "2 - 3 Weeks", "One month or more"].map((time) => (
                <label key={time} className="flex items-center bg-gray-100 p-3 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="leadTime"
                    value={time}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  {time}
                </label>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold p-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnquiryPopup;
