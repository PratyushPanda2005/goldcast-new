import React from "react";
import SectionTitle from "../components/section-title";

const SignUp = () => {
  return (
    <section
        style={{backgroundImage: "url(/bg/signupBg.png)",backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}
      id="signup-page"
      className="min-h-screen flex justify-center items-center bg-black overflow-hidden py-[120px] px-6 md:px-20"
    >
      <div className="max-w-7xl w-full flex flex-col justify-center items-center">
        <SectionTitle title="Register" />
        <div className="w-full max-w-2xl relative mt-10 md:mt-20">
          <div className="bg-gradient-to-b from-[#FFFFFF] via-[#D01EDA] to-[#0ADC7D] p-1 rounded-3xl">
            <div className="w-full bg-[#101010] rounded-[inherit] px-6 py-16 sm:px-10 sm:py-20  text-white flex flex-col gap-10 max-sm:gap-6">
              <h1 className="text-3xl md:text-5xl">Sign Up</h1>
              <div className="flex flex-col gap-4 md:gap-6">
                <input
                  type="text"
                  className="border-2 border-neutral-500 w-full p-4 rounded-2xl text-lg md:text-xl"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="border-2 border-neutral-500 w-full p-4 rounded-2xl text-lg md:text-xl"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="border-2 border-neutral-500 w-full p-4 rounded-2xl text-lg md:text-xl"
                  placeholder="Work Email*"
                />
                <input
                  type="text"
                  className="border-2 border-neutral-500 w-full p-4 rounded-2xl text-lg md:text-xl"
                  placeholder="Title"
                />
                <input
                  type="text"
                  className="border-2 border-neutral-500 w-full p-4 rounded-2xl text-lg md:text-xl"
                  placeholder="Company Name"
                />
                <button className="w-full text-xl py-4 bg-gradient-to-b from-[#F65BFF] to-[#D01EDA] rounded-xl">
                    Apply for Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
