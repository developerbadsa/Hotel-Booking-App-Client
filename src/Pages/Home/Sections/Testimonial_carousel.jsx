import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Sample testimonial data
const testimonials = [
      {
            id: 1,
            text: "I had an amazing experience booking through this website. The process was smooth, and the options available were perfect for my needs. I'll definitely use this platform again for my future bookings.",
            author: "John Smith",
            position: "Frequent Traveler",
            imageSrc: "https://i.ibb.co/28Nmyww/images-5.jpg",
      },
      {
            id: 2,
            text: "The booking service on this website is top-notch. It's user-friendly, and I was able to find the best deals for my trip. The customer support team was also very helpful. Highly recommended!",
            author: "Mary Johnson",
            position: "Travel Enthusiast",
            imageSrc: "https://i.ibb.co/gydMM9R/images-4.jpg",
      },
      {
            id: 3,
            text: "I'm impressed with the quality of service provided by this booking website. The prices are competitive, and the booking process is hassle-free. I had a fantastic experience, and I'll be coming back for sure.",
            author: "David Wilson",
            position: "Business Traveler",
            imageSrc: "https://i.ibb.co/n1PsY4q/pexels-photo-2379004.jpg",
      },
      {
            id: 4,
            text: "I've used many booking websites, but this one stands out. It offers a wide range of options and the ability to customize your booking. The website's design is also very appealing and easy to navigate.",
            author: "Linda Davis",
            position: "Vacation Planner",
            imageSrc: "https://i.ibb.co/yNZ87yb/images-3.jpg",
      },
      {
            id: 5,
            text: "Booking with this website was a breeze. The interface is intuitive, and I had no trouble finding what I needed. The website has made my travel planning much more convenient and enjoyable.",
            author: "Michael Clark",
            position: "Adventurous Traveler",
            imageSrc: "https://i.ibb.co/bJdxZ0n/images-2.jpg",
      },
];


function TestimonialCarousel() {
      const [currentTestimonial, setCurrentTestimonial] = useState(0);

      useEffect(() => {
            // Auto-advance the carousel every 5 seconds
            const interval = setInterval(() => {
                  setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
            }, 5000);

            return () => {
                  clearInterval(interval);
            };
      }, [currentTestimonial]);

      const nextTestimonial = () => {
            setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
      };

      const prevTestimonial = () => {
            setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
      };

      return (
            <div className="w-full shadow-md my-18 shadow-2xl flex gap-10">
                  <div className="text-center shadow-sm">
                        <h1 className="text-4xl my-5 font-bold">Testimonials</h1>
                        <p className="text-lg my-6 mb-12">
                              The testimonial section on a hotel booking website is a dedicated area where previous guests or customers share their experiences and feedback about their stay or booking process. It usually consists of comments, reviews, and ratings, often accompanied by the guest.
                        </p>
                  </div>

                  <div>
                        <div className="relative px-4">
                              <button className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-2xl" onClick={prevTestimonial}>
                                    <FaArrowLeft />
                              </button>
                              <blockquote className="px-32">
                                    <p className="text-2xl font-semibold text-gray-900 dark:text-white transition-opacity duration-500">
                                          {testimonials[currentTestimonial].text}
                                    </p>
                              </blockquote>
                              <button className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-2xl" onClick={nextTestimonial}>
                                    <FaArrowRight />
                              </button>
                        </div>

                        <figcaption className="flex items-center mt-6 space-x-3 justify-center px-2">
                              <img className="w-12 h-12 rounded-full" src={testimonials[currentTestimonial].imageSrc} alt="profile picture" />
                              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                                          {testimonials[currentTestimonial].author}
                                    </cite>
                                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                                          {testimonials[currentTestimonial].position}
                                    </cite>
                              </div>
                        </figcaption>
                  </div>
            </div>
      );
}


export default TestimonialCarousel;
