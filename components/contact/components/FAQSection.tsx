// Directive to ensure this component is treated as a client-side component
'use client';

import React, { useState } from 'react';

// Defining the structure of an FAQ item using a TypeScript interface
interface FAQ {
  question: string;
  answer: string;
}

// Functional component for the FAQ section
const FAQSection: React.FC = () => {
  // Array of FAQ objects with questions and answers
  const faqs: FAQ[] = [
    {
      question: 'HOW DO THEY WORK?',
      answer:
        'They are a reusable cling film alternative! Use them like cling film (but not in the microwave). They are great in that they stick to themselves, so can be put around anything! Scrunch the wrap in your hands to warm it up and make it pliable, then using the heat of your hands, wrap it over or around whatever you are storing. You can also get creative and make pouches, bags, and much more. Don’t be afraid to pinch the edges together to get a seal.'
    },
    {
      question: 'DO THEY TRANSFER ANY ODOUR OR TASTE TO FOOD?',
      answer:
        'No! The wraps themselves smell very slightly of beeswax, but no taste or smell gets transferred to your food.'
    },
    {
      question: 'HOW DO I CLEAN THEM?',
      answer:
        'Using cool water and washing up liquid, gently rub to get clean. I like to use my fingers, but a gentle scrub should be ok. Hang to dry and keep away from heat sources (like radiators)'
    },
    {
      question: 'WHAT IF I ACCIDENTALLY MELT THE WAX?',
      answer:
        'Uh oh! If this does happen, you can refresh them yourself. Contact me and I will help you!'
    },
    {
      question: 'HOW LONG DO THEY LAST?',
      answer:
        'With proper care and regular use, they should last up to a year. At that point, you can refresh them, giving them a whole new life-span.'
    },
    {
      question: 'WHAT ABOUT WHEN THEY’RE NO LONGER STICKY?',
      answer: 'You can: - Refresh.  - Compost. - Use as a fire starter!'
    },
    {
      question: 'CAN I USE THEM ON RAW MEAT OR FISH?',
      answer:
        'No! They can’t be cleaned with hot water, so please don’t put any raw meat or fish in them.'
    },
    {
      question: 'WHAT ABOUT ALLERGIES?',
      answer:
        'Out of an abundance of caution, we say if you have peanut allergies, do not use. The reason is they are made with tree resin.'
    }
  ];

  // useState hook to keep track of which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the visibility of an FAQ answer
  const toggleFAQ = (index: number) => {
    // Set the openIndex to the clicked FAQ index if it's not already open, otherwise set to null
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {/* Map through the FAQs array to render each FAQ item */}
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          {/* Clickable div to toggle the FAQ answer visibility */}
          <div
            className="bg-200 hover:300 flex transform cursor-pointer items-center justify-between rounded-md bg-customGreen px-4 py-2 transition duration-300 ease-in-out hover:bg-customLightGreen"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-medium">{faq.question}</h3>
            {/* Display either a plus or minus sign based on the openIndex state */}
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {/* Conditionally render the FAQ answer if the current index matches the openIndex */}
          {openIndex === index && (
            <div className="bg-100 rounded-md  bg-customGreen px-4 py-2">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
