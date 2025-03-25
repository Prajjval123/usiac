import React from "react";

const EnquiryModal = ({ isOpen, onClose }) => {
  // Prevent rendering if not open
  if (!isOpen) return null;

  // A simple placeholder for reCAPTCHA
  const recaptchaPlaceholder = (
    <div className="bg-gray-200 text-black py-4 px-2 mt-2 rounded text-sm text-center">
      <p>reCAPTCHA placeholder</p>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="bg-white text-black rounded shadow-lg w-[90%] max-w-2xl relative">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#e4005e]">Enquiry Form</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Contact No.</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
              placeholder="Enter your contact number"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Explain your need (e.g., sculpture, mural, painting, etc.)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
              placeholder="e.g., Looking for a bronze statue..."
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* reCAPTCHA placeholder */}
          {recaptchaPlaceholder}
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-4 px-6 py-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Close
          </button>
          <button className="bg-[#e4005e] hover:bg-pink-700 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
