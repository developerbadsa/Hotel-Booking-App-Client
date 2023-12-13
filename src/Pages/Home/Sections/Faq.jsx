
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
      <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="mb-4 text-3xl font-bold dark:text-white"> Frequently Asked Questions </h1>
          <p className="max-w-xl mx-auto text-gray-500">
            Find answers to common questions about our hotel booking services.
          </p>
        </div>
        <div className="max-w-xl">
          {[
            {
              question: 'How can I make a reservation?',
              answer: 'To make a reservation, simply visit our website, select your desired dates, choose a room, and proceed to the booking process. You can also contact our customer service for assistance.'
            },
            {
              question: 'What payment methods do you accept?',
              answer: 'We accept various payment methods, including credit cards, debit cards, and online payment platforms. Ensure that your preferred payment method is available during the booking process.'
            },
            {
              question: 'Is there a cancellation fee?',
              answer: 'Cancellation policies vary based on the type of room and rate you choose. Please review the terms and conditions during the booking process. Some rates may have a flexible cancellation policy.'
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between w-full px-6 py-4 mb-2 bg-white rounded shadow dark:bg-gray-700`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span className="font-bold dark:text-white">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`text-blue-500 ${openIndex === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
              {openIndex === index && (
                <div className="text-sm text-gray-500 dark:text-gray-400 answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
