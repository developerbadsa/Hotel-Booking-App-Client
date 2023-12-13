import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FaArrowAltCircleDown, FaUser } from "react-icons/fa";
import Special_Offers from "./Sections/Special_Offers";
import TestimonialCarousel from "./Sections/Testimonial_carousel";
import Subscribe_Newslater from "./Sections/Subscribe_Newslater";
import { Link } from "react-router-dom";
import OurGallary from "./Sections/OurGallary";
import FAQ from "./Sections/Faq";


const Home = () => {
      return (
            <HelmetProvider>
                  <div>
                        <Helmet>
                              <title>Home | Hotel Booking</title>
                              <link rel="icon" type="image/png" href="Images/Icons/home.png" />
                        </Helmet>
                        <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
                                    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                                          <div className="flex flex-wrap ">
                                                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                                      <div className="relative">
                                                            <img
                                                                  src="https://i.ibb.co/Bq6fxCB/room2-1024x664.jpg"
                                                                  alt=""
                                                                  className="relative z-0 lg:z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                                                            />
                                                            <div className="absolute z-10 hidden w-full h-full bg-orange-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                                                            <div className="absolute z-45 text-orange-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-orange-500">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={16}
                                                                        height={16}
                                                                        fill="currentColor"
                                                                        className="w-14 h-14 bi bi-play-circle-fill"
                                                                        viewBox="0 0 16 16"
                                                                  >
                                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                                                      <div className="relative">
                                                            <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                                                  About Us
                                                            </h1>
                                                            <h1 className="pl-2 text-3xl font-bold border-l-8 border-orange-400 md:text-5xl dark:text-white">
                                                                  Welcome Booking
                                                            </h1>
                                                      </div>
                                                      <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                                      Welcome to Hotel Booking, your premier destination for hassle-free hotel bookings and unforgettable travel experiences. We understand that finding the perfect accommodation can be a daunting task, which is why we're here to make your journey easier and more enjoyable.
                                                      </p>
                                                      <Link to='/about'
                                                            href="#"
                                                            className="px-4 py-3 text-gray-50 transition-all transform bg-orange-400 rounded-[80px] hover:bg-orange-500 dark:hover:text-gray-100 dark:text-gray-100 "
                                                      >
                                                            Know More About Booking
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/J5yqS83/room6-1024x664.jpg)' }}>
                              <div className="hero-overlay bg-opacity-70"></div>
                              <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md uppercase">

                                          <p className="mb-5">LUXURY HOTEL & BEST RESORT
                                          </p>
                                          <h1 className="mb-5 text-5xl font-bold leading-[60px] my-9">Enjoy Luxury Experience</h1>
                                          <button className="btn bg-transparent rounded-none border-4 text-white my-8">Rooms Suites</button>

                                          <div className="flex flex-col">
                                                <span className="my-8">To See more</span>
                                                <div className="flex justify-center gap-4">
                                                      <FaArrowAltCircleDown></FaArrowAltCircleDown>
                                                      <FaArrowAltCircleDown></FaArrowAltCircleDown>
                                                      <FaArrowAltCircleDown></FaArrowAltCircleDown>
                                                </div>
                                          </div>

                                    </div>
                              </div>
                        </div>
                        <Special_Offers></Special_Offers>
                        <OurGallary></OurGallary>
                        <div className="my-12">
                              <TestimonialCarousel></TestimonialCarousel>
                        </div>
                        <div className="my-12">
                              <Subscribe_Newslater></Subscribe_Newslater>

                        </div>
                        <FAQ></FAQ>

                  </div>
            </HelmetProvider>

      );
};

export default Home;