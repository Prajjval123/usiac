import React from "react";
import Services from "./Services";
import Clients from "./Clients";

const Partners = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-center">
        <img
          src="/assets/partners/partners.jpeg"
          alt=""
          className="px-4 sm:px-8 h-24"
        />
      </div>
      <section className=" p-8 text-md">
        <div className="flex flex-col md:flex gap-4 md:justify-between">
          <h1 className="text-3xl font-bold  text-center">Partners</h1>
          <a href="#" className="text-3xl text-center mb-6 underline ">
            Partners Enquiry
          </a>
        </div>
        <p className="text-lg text-center md:text-start font-md">
          Orpax Qualtra is a growing company with diverse solution platforms. We
          understand the significance and value of forming relationships of
          strategic alliances. Already we have established several strategic
          partnerships with leading service providers within the industry and we
          thank all of them for being a driving force and a major contributor
          towards enhancing awareness of our solutions and services. We know
          that strong partnerships will help our team to create stronger
          solutions for our customers. Therefore, we intend to approach the
          market with our valuable partners to implement and architect optimized
          solutions and services. Our combined goals will enable us to meet the
          dynamic changes in today's business patterns and help us to better
          understand the needs of our customers. Therefore, we invite
          partnership alliances with other companies who have the same level of
          dedication and passions as we have, who are involved in our associated
          trading niches and who are genuinely serious about pursuing and
          fulfilling the tremendous market demand we are presently witnessing.
          We are now interested in establishing partnerships with individuals,
          companies and groups from across the globe with considerable market
          exposure but without the necessary human strength to execute their
          projects or service message, those with a niche market product
          aligning with our expertise and we look forward to being of service as
          a unique and outstandingly capable outsourcing hub for those in need
          of our services. Together, we can share our resources to carry a
          mutual message to a wider audience across the world. We are committed
          in developing productive and meaningful partnerships that will
          guarantee a continued growth as well as adoption of our unique
          solutions and technologies on a global context and which in turn would
          create successful business opportunities linked with OQ. Our strategic
          partners should have the capacity to tackle the market competently,
          add value to OQ solution range and have the effective resources to
          deliver Orpax Qualtra solutions to end users while at the same time
          benefit through our marketing and outsourcing services to promote
          their own niche services and products.
        </p>
      </section>
      <section className="bg-gray-900 p-8 text-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Our partnership advantages
        </h1>
        <ul class="list-disc list-inside text-gray-300 space-y-4 mb-4">
          <li class="text-lg font-medium">
            Seamless access to a rapidly growing marketplace with desirable
            profit margins
          </li>
          <li class="text-lg font-medium">
            Exposure to sophisticated and world-class solutions and services
            with speedy implementation options
          </li>
          <li class="text-lg font-medium">
            Complete project security
          </li>
        </ul>

        <p className="text-lg font-md text-center md:text-start">
          Together, let us create valuable partnerships that will engage
          customers while delivering them with a much needed service. Join us to
          build value globally through innovative solution marketing. We take
          extensive measures to ensure that our customers and partners are
          matched suitably and connected optimally so they could enjoy mutual
          benefits to the maximum. We seek partners representing world's
          acknowledged technology innovations with the competency to deliver and
          promote our expertise, know-how, full cycle software and hardware
          solutions. We have no geographical boundaries or scales, our partners
          can be from any part of the world with a marked reputation for
          providing quality and high standard services within their locality. We
          ensure providing our partners with the highest visibility level,
          support and backing as they engage in pursuing strategic opportunities
          that will be exclusively available for the Orpax Qualtra partners.
          Together lets create valuable partnerships that will engage customers
          while delivering them with a much needed service. Join us to build
          value globally through innovative solution marketing.
        </p>
      </section>
      <Services />
      <Clients />
    </div>
  );
};

export default Partners;
