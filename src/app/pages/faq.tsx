'use client'
import React, { useState } from "react";
import SectionTitle from "../components/section-title";
import { Plus, Minus, ArrowRight } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of video content can I create with Goldcast?",
      answer: "You can create various types of video content including live streams, recorded presentations, interactive sessions, and more with Goldcast's versatile platform."
    },
    {
      question: "Which type of virtual hybrid event is your software best for?",
      answer: "Our software is ideal for corporate events, product launches, conferences, trade shows, and any event that requires both in-person and virtual attendance."
    },
    {
      question: "How does the hybrid event platform handle audience engagement?",
      answer: "The platform includes features like live Q&A, polls, chat rooms, and networking tools to maximize engagement for both virtual and in-person attendees."
    },
    {
      question: "Can I customize the branding of my event?",
      answer: "Yes, our platform allows full customization of your event's branding including colors, logos, and layouts to match your company's identity."
    },
    {
      question: "What kind of analytics does the platform provide?",
      answer: "You'll get detailed analytics on attendance, engagement metrics, session popularity, and attendee behavior to measure your event's success."
    },
    {
      question: "Is there a limit to the number of attendees?",
      answer: "Our platform can scale to accommodate events of any size, from small meetings to large conferences with thousands of participants."
    }
  ];

  const toggleFAQ = (index : number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex min-h-screen justify-center bg-black overflow-hidden py-[80px] md:py-[120px] px-6 md:px-20">
      <div className="relative z-50 w-full max-w-7xl">
        <SectionTitle title="Hybrid event platform FAQs" />
        <div className="w-full flex justify-center items-center">
        <div className="mt-10 md:mt-20 flex flex-col gap-6 w-full ">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="text-white border-b border-[#6F7888]"
            >
              <div 
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="text-xl md:text-2xl font-medium">{faq.question}</h1>
                {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-4 pt-0 pb-6 text-[#A1A8B8] md:text-lg">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="mt-10 md:mt-20 flex flex-col gap-4">
        <h1 className="text-white text-lg">More questions?</h1>
        <h2 className="text-[#FF4200] flex items-center text-sm">Visit Help Center<ArrowRight className="h-[1em]"/></h2>
        </div>
      </div>
    </section>
  );
};

export default FAQ;