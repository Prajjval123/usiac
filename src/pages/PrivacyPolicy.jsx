import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const PrivacyPolicy = () => {
  const { policyData, loading, error } = useContext(GlobalContext);
  console.log(policyData)
  return (
    <div className="pb-20">
      <div className="pt-40 px-10 lg:px-20">
        <section className="p-8 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-4">
            {policyData?.pageTitle}
          </h1>
          <p className="text-lg leading-relaxed px-4 text-justify">
            {policyData?.sections[0].paragraphs[0].children[0].text}
            <br />{policyData?.sections[1].paragraphs[0].children[0].text}
          </p>
        </section>
      </div>

      <div className="pt-10 px-10 lg:px-20 relative">
        <section className="p-8 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl backdrop-blur-lg">
          <h1 className="text-4xl font-bold text-center mt-4">
          {policyData?.sections[2].heading}
          </h1>
          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[2].paragraphs[0].children[0].text}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[3].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[4].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[5].paragraphs[0].children[0].text}
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[6].paragraphs[0].children[0].text}
            </p>

            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[7].paragraphs[0].children[0].text}
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[8].paragraphs[0].children[0].text}
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[9].paragraphs[0].children[0].text}
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
              If you choose to post messages on our message boards, chat rooms
              If you choose to post messages on our message boards, chat rooms
              or other message areas or leave feedback, we will collect that
              information you provide to us. We retain this information as
              necessary to resolve disputes, provide customer support and
              troubleshoot problems as permitted by law.
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[10].paragraphs[0].children[0].text}
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[11].paragraphs[0].children[0].text}
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[12].paragraphs[0].children[0].text}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[13].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[14].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[15].paragraphs[0].children[0].text}
            </p>
            <br />

            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[16].paragraphs[0].children[0].text}
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[17].paragraphs[0].children[0].text}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[18].paragraphs[0].children[0].text}
            </p>
            <br />
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[19].paragraphs[0].children[0].text}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[20].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[21].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[22].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[23].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[24].paragraphs[0].children[0].text}
            </p>
            <br />
          </div>
        </section>
        <img
          src="assets/For developer/Red_Dot.png"
          className="absolute top-8 ml-16 opacity-40 "
        />
      </div>

      <div className="pt-10 px-10 lg:px-20 relative">
        <section className="p-8 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl backdrop-blur-lg">
          <h1 className="text-4xl font-bold text-center mt-4">
          {policyData?.sections[25].heading}
          </h1>
          <p className="text-lg leading-relaxed px-4 text-justify">
          {policyData?.sections[25].paragraphs[0].children[0].text}
          </p>
          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[26].heading}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[26].paragraphs[0].children[0].text}
            </p>
            <br />
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[27].heading}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[27].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[28].paragraphs[0].children[0].text}
              <a
                href="www.orpaxqualtra.com"
                target="_blank"
                className="text-blue-500"
              >
                {policyData?.sections[28].heading}
              </a>
              .
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[29].heading}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[29].paragraphs[0].children[0].text}
            </p>
          </div>

          <div>
            <p className="text-red-500 text-2xl text-justify leading-relaxed px-4">
            {policyData?.sections[30].heading}
            </p>
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[30].paragraphs[0].children[0].text}
            </p>
            <br />
            <p className="text-justify text-lg leading-relaxed px-4">
            {policyData?.sections[31].paragraphs[0].children[0].text}
            </p>
          </div>
        </section>
        <img
          src="assets/For developer/Red_Dot.png"
          className="absolute top-8 ml-16 opacity-40 "
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
