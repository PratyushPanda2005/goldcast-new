'use client'
import React from "react";
import Marquee from "react-fast-marquee";
import AllianceCard from "../components/alliance-card";
import SectionTitle from "../components/section-title";
import Jensen from "../../../public/profile/jensen.png"
import Yoshua from "../../../public/profile/yoshua.png"
import { motion } from "motion/react"

const Alliance = () => {
  return (
    <section
      id="alliance"
      className="min-h-screen flex justify-center items-center bg-black overflow-hidden "
    >
      <div className="relative z-50 w-full ">
        <div className="flex justify-center items-center flex-col gap-4 md:gap-6 px-6 md:px-20">
          <SectionTitle title="What is the AI Marketing Alliance?"/>
          <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} viewport={{once: true}} className="text-white text-center md:max-w-3xl text-sm md:text-lg">
            The AI Marketing Alliance is the essential resource and network for
            enterprise marketing leaders driven to integrate artificial
            intelligence into their strategies and operations. Our mission is
            clear: to educate every marketing leader on the practical
            applications of AI, helping them not only keep pace but also excel
            in a rapidly evolving space.
          </motion.p>
        </div>

        <Marquee autoFill={true} className="mt-10">
          <AllianceCard
            profile={Jensen}
            title="Jensen Huang"
            position="CEO of NVIDIA"
            description="AI will be the most transformative technology of the 21st century. It will affect every industry and aspect of our lives."
          />
          <AllianceCard
            profile={Yoshua}
            title="Yoshua Bengio"
            position="Computer scientist and Turing Award laureate"
            description="Artificial intelligence is not just about efficiency gains, it's about opening up new possibilities, unlocking human potential and solving some of society's biggest challenges"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Alliance;
