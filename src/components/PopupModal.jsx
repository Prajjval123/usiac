import React, { useState } from "react";

const PopupModal = ({ onClose }) => {
  // Local state for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Show/hide toast notification
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form values in console
    console.log("Name:", name);
    console.log("Email:", email);

    // Show toast
    setShowToast(true);

    // Optionally auto-close the modal after a delay
    setTimeout(() => {
      setShowToast(false);
      onClose(); // or remove if you want the user to close manually
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md relative max-w-sm w-full">
        {/* Cancel button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome!</h2>
        <p className="text-gray-700 mb-4">
          This popup appears on your first visit. Please fill out the form or close it.
        </p>

        {/* Example Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded p-2 w-full mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded p-2 w-full mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {/* Toast Notification */}
        {showToast && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-md mt-2">
            Form submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupModal;
