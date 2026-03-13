import React, { useRef } from "react";

import bgImage from "../assets/Orka-images/chooseusbg.png";
import img1 from "../assets/Orka-images/imageorka1.jpeg";
import img2 from "../assets/Orka-images/imageorka10.jpeg";
import img3 from "../assets/Orka-images/imageorka11.jpeg";
import img4 from "../assets/Orka-images/imageorka12.jpeg";

const ChoosseUss = () => {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return; 

    const { offsetWidth, offsetHeight } = sectionRef.current;
    let x = (e.pageX / offsetWidth - 0.5) * 25;
    let y = (e.pageY / offsetHeight - 0.5) * 25;
    const items = sectionRef.current.querySelectorAll(".parallax");

    items.forEach((item, i) => {
      const speed = (i + 1) * 0.15;
      item.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#e9e1d8] "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* HEADING + TEXT */}
<div className="text-center pt-6 md:pt-0 mb-10 md:mb-16 px-4 sm:px-6 lg:px-0">        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#5d4037] mb-4">
          Why Choose Us
        </h2>
        <p className="text-[#7b5e57] max-w-xl mx-auto text-base sm:text-base md:text-lg leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-3 items-stretch justify-items-center px-4 sm:px-6 md:px-8 lg:px-10">

        {/* CARD 1 */}
        <div className="parallax flex flex-col items-center w-full sm:w-[200px]">
          <img
            src={img1}
            alt=""
            className="w-full h-[210px] object-cover rounded-tl-[110px] rounded-br-[20px] shadow-xl mb-5"
          />
          <div className="mt-4 w-full min-h-[100px] text-center sm:text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-[#4b3a33]">
              Natural & Skin-Friendly Formula
            </h4>
            <p className="text-sm sm:text-base mt-2 leading-relaxed text-[#7b6a63]">
              Made with high-quality ingredients that are gentle on the skin and help reduce irritation.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="parallax flex flex-col items-center w-full sm:w-[200px]">
          <div className="w-full min-h-[100px] text-center sm:text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-[#4b3a33]">
              Smooth & Long-Lasting Results
            </h4>
            <p className="text-sm sm:text-base mt-2 leading-relaxed text-[#7b6a63]">
              Removes hair from the root, leaving your skin soft and smooth for weeks.
            </p>
          </div>
          <img
            src={img2}
            alt=""
            className="w-full h-[210px] mt-5 object-cover shadow-xl"
          />
        </div>

        {/* CARD 3 */}
        <div className="parallax flex flex-col items-center w-full sm:w-[200px] lg:-mt-[80px]">
          <img
            src={img3}
            alt=""
            className="w-full h-[210px] object-cover shadow-xl"
          />
          <div className="mt-4 w-full min-h-[100px] text-center sm:text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-[#4b3a33]">
              Suitable for All Skin Types
            </h4>
            <p className="text-sm sm:text-base mt-2 leading-relaxed text-[#7b6a63]">
              Specially designed to work effectively on normal, dry, and sensitive skin.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="parallax flex flex-col items-center w-full sm:w-[200px] lg:-mt-[85px]">
          <div className="w-full min-h-[100px] text-center sm:text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-[#4b3a33]">
              Professional-Grade Quality
            </h4>
            <p className="text-sm sm:text-base mt-2 leading-relaxed text-[#7b6a63]">
              Salon-quality performance with an easy-to-use formula for flawless results at home.
            </p>
          </div>
          <img
            src={img4}
            alt=""
            className="w-full h-[210px] mt-5 object-cover rounded-br-[110px] rounded-tl-[20px] shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ChoosseUss;