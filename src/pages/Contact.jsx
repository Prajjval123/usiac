import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReCAPTCHA from "react-google-recaptcha";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const form = useRef();
  const navigate = useNavigate();

  // GSAP references
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const detailRefs = useRef([]); // Array of references for each detail box

  // Animate on mount
  useEffect(() => {
    const tl = gsap.timeline();

    // Heading fade in from below
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Form fade in from below (slightly after heading)
    tl.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      "<0.3"
    );

    // Detail boxes scroll-trigger animation
    detailRefs.current.forEach((detailBox, i) => {
      if (!detailBox) return;
      gsap.fromTo(
        detailBox,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: detailBox,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  // New form submission handler: logs details to console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Optionally, navigate or reset the form if desired.
    // navigate("/thank-you");
  };

  const onChange = (value) => {
    console.log("ReCAPTCHA value:", value);
    setVerified(!verified);
  };

  return (
    <div>
      <div className="container mx-auto py-16 p-8 lg:px-0">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl lg:text-5xl font-bold text-center mb-8"
        >
          Contact Us
        </h2>
        <p className="text-md lg:text-lg text-center mb-12">
          Request a quote to get custom pricing. Please take a moment to fill in
          the form.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:px-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-2xl mx-auto lg:mx-0 bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Your Contact Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg h-40"
            />
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
              className="rounded-lg shadow-md"
              theme="dark"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-md font-medium text-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-12">
            {/* Detail Box 1 */}
            <div
              ref={(el) => (detailRefs.current[0] = el)}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Head Office (INDIA)
              </h3>
              <p>
                Contact Person:{" "}
                <span className="text-gray-400">Mr. Arnab Paul</span>
              </p>
              <p>
                Address:{" "}
                <span className="text-gray-400">
                  97-A, (FFB) Indraprastha Estate Sector-30-33, <br />
                  Faridabad, Haryana-121003
                </span>
              </p>
              <p>
                Phone:
                <a href="tel:+919810041039" className="text-gray-400 ml-2">
                  +91 9810041039
                </a>
                ,
                <a href="tel:+919319644022" className="text-gray-400 ml-2">
                  +91-9319644022
                </a>
              </p>
              <p>
                Email:
                <a
                  href="mailto:arnab.paul@orpaxqualtra.com"
                  className="text-gray-400 ml-2"
                >
                  arnab.paul@orpaxqualtra.com
                </a>
              </p>
            </div>

            {/* Detail Box 2 */}
            <div
              ref={(el) => (detailRefs.current[1] = el)}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">CANADA</h3>
              <p>
                Contact Person:{" "}
                <span className="text-gray-400">Mr. Prasun Das</span>
              </p>
              <p>
                Address:{" "}
                <span className="text-gray-400">
                  11 Schooner Lane, Toronto, M1C5J3
                </span>
              </p>
              <p>
                Phone:
                <a href="tel:+16477714348" className="text-gray-400 ml-2">
                  +1 647-771-4348
                </a>
              </p>
              <p>
                Email:
                <a
                  href="mailto:prasun.das@orpaxqualtra.com"
                  className="text-gray-400 ml-2"
                >
                  prasun.das@orpaxqualtra.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
