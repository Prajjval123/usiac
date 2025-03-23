import React from "react";

const WhatWeDo = () => {
  return (
    <div className="my-24 px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">
            PROFILE OF MR. DIAL V. GIDWANI
          </h2>
          <p className="text-justify">
            A versatile personality and a gentleman with dynamism, he is
            genuinely a man of mission. It was Mr. Gidwani who encouraged Mr.
            Wilson to include Indian artists as part of the program. He
            accompanied Mr. Wilson to different parts of India and highlighted
            Indias rich heritage in this sphere. gidwani_120 Mr. Gidwani is the
            founding President of The American Institute of Sindhulogy (AIS).
            AIS is a non-profit, non-religious, non-political entity dedicated
            to promoting awareness of the Ancient Sindhu (Indus) and Saraswati
            Civilization. The institute was inaugurated by Mr. Ram B.
            Jethmalani, former minister of Law and Justice and currently a
            member of Parliament on August 06,2000. See details web site link
            Click here: http://www.sindhulogy.org/pdfs/DGidwani_article.pdf Mr.
            Wilson was the invited and honored guest art consultant at the new
            Art Caucasus Exposition, held in Tbilisi, in the Republic of
            Georgia, in early October, of both 2004 and 2005. Mr. Dial has
            retired now.
          </p>
        </div>
        <div className="md:col-span-1 flex justify-center">
          <img
            src="/assets/about/profile/Gidwani.jpg"
            alt="MR. DIAL V. GIDWANI"
            className="w-96 h-96 rounded-full col-span-1 justify-self-end"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center items-center relative">
          <img
            src="/assets/about/profile/Arnab.jpg"
            alt="MR. ARNAB PAUL"
            className="w-96 h-96 rounded-full"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">PROFILE OF MR. ARNAB PAUL</h2>
          <p className="text-justify">
            Mr. Paul is the pivotal personality in India who provided the
            impetus to begin this project. Mr. Paul is able to travel India, and
            provide liaison between institutions such as Art Colleges,
            Galleries, Museums and Art Centers, that can provide the backing to
            make this international exchange program possible. He is familiar
            with the established and upcoming talent of India, and will be an
            able guide. arnab_paul_120 Arnab Paul lives in Indias capital, New
            Delhi, and spends time as well in Kolkata. His life work is based on
            assisting organizations and talents that may not have all of the
            opportunities of others. His illustrious career received a major
            thrust during his assignment as the Project Manager in the very
            prestigious Pension Reform Project of the Government of India, for
            design and development of the Crosstabular Analytical Tool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
