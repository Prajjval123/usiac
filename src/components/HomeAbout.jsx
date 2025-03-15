const HomeAbout = () => {
  return (
    <section className="w-full bg-black text-white overflow-hidden">
      {/* TOP: Heading & Subheading */}
      <div className=" mx-auto pt-16 pb-8 px-4 md:px-8 text-center">
      <h2 className="text-[#e4005e] text-5xl font-bold tracking-wide">ABOUT US</h2>
      <p className="text-white text-xl font-medium mt-2">Everything you need to know...</p>
      </div>

      {/* BOTTOM: Two-column layout with vertical divider */}
      <div className="mx-auto flex flex-col md:flex-row">

        {/* LEFT COLUMN: Dark gray box with paragraphs */}
        <div className="md:w-2/3 bg-[#2c2b2b] p-8 md:p-20 space-y-6 text-right leading-snug">
          <p className="text-gray-200 leading-relaxed text-sm md:text-base font-sans">
            US-INDIA ART and Culture Exchange Center is one of the three divisions of Orpax <br /> Qualtra.
            USIAC is an Artworks organization which is principally associated with the <br /> concept/theme
            design, manufacturing and installation of Artworks. The <br /> organization specializes in
            producing innovative and aesthetically pleasing artworks <br /> for your place for both
            interiors and exteriors.
          </p>
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            US-INDIA is an organization, providing an ideal platform for nurturing and <br /> encouraging
            upcoming talents (particularly those, who are gifted but lacking <br /> availability of
            adequate resource) in innovative and truly intriguing artistic and <br /> cultural ventures.
          </p>
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            Facilitating exchange of innovative artistic &amp; cultural creations and creators
            within <br /> the well appreciative audiences in the societies of the United States, the oldest <br />
            democracy and India, the largest democracy.
          </p>
        </div>

        {/* RIGHT COLUMN: Large uppercase text */}
        <div className="md:w-1/2 bg-black px-8 md:px-10 lg:pr-16 flex items-center justify-center">
          <p className="text-lg md:text-3xl font-light uppercase leading-snug tracking-wide text-left">
            COME.... LET’S ALL PARTICIPATE &amp; REJOICE IN OUR CONTINUOUS ENDEAVOR FOR DISCOVERING
            AND PROMOTING UPCOMING TALENTS IN ART &amp; CULTURE.........&amp; SEE FOR YOURSELF —
            AS TO HOW GRATIFYING THIS ACT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;