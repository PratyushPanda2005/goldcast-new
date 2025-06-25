import React from "react";
import SectionTitle from "../components/section-title";

const VideoPage = () => {
  return (
    <section
      id="videoPage"
      className="flex justify-center items-center bg-black overflow-hidden pt-[120px] px-6 md:px-20"
    >
      <div className="relative z-50 w-full max-w-7xl flex flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-4 md:gap-6">
          <SectionTitle title="Who is the Alliance for?" />
          <p className="text-white text-center md:max-w-3xl md:text-lg">
            The Alliance is designed for marketing executives in
            enterprise-sized organizations across all industry verticals.
            Joining will allow you not just to stay current, but to actively
            shape the future of marketing in your organization; empowering your
            team to drive both pipeline and productivity.
          </p>
        </div>
        <div className="w-full max-w-5xl h-[70vh] mt-20 relative">
          <div className="absolute inset-0 !bg-gradient-to-b !from-[#FFFFFF] !via-[#D01EDA] !to-[#0ADC7D] p-1 rounded-3xl">
            <div className="w-full h-full bg-black rounded-[inherit] flex justify-center items-center">
              <img src="/svgs/playbutton.svg" alt="" className="" />
            </div>
          </div>
        </div>
        <section className="flex flex-col justify-center items-center overflow-hidden pt-[120px]">
          <SectionTitle title="Who is the Alliance for?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white mt-10 lg:mt-20">
            <div
              style={{
                backgroundImage: "url(/bg/cardBg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className=" p-10 flex flex-col gap-6 rounded-2xl"
            >
              <img src="/svgs/stack.svg" className="w-20" />
              <h1 className="text-2xl font-semibold">
                Multi-Format Educational Content every month
              </h1>
              <p className="md:text-lg">
                Available on demand, including webinars, articles, and more,
                catering to diverse learning preferences.
              </p>
            </div>
            <div style={{
                backgroundImage: "url(/bg/cardBg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
               className="p-10 flex flex-col gap-6 rounded-2xl">
              <img src="/svgs/Exclude.svg" className="w-[80px]" />
              <h1 className="text-2xl font-semibold">
                Multi-Format Educational Content every month
              </h1>
              <p className="md:text-lg">
                Available on demand, including webinars, articles, and more,
                catering to diverse learning preferences.
              </p>
            </div>
            <div 
               style={{
                backgroundImage: "url(/bg/cardBg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            className="p-10 flex flex-col gap-6 rounded-2xl">
              <img src="/svgs/networking.svg" className="w-[80px]" />
              <h1 className="text-2xl font-semibold">
                Multi-Format Educational Content every month
              </h1>
              <p className="md:text-lg">
                Available on demand, including webinars, articles, and more,
                catering to diverse learning preferences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default VideoPage;
