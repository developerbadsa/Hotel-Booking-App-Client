import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FaArrowAltCircleDown, FaUser } from "react-icons/fa";
import Special_Offers from "./Sections/Special_Offers";
import TestimonialCarousel from "./Sections/Testimonial_carousel";
import Subscribe_Newslater from "./Sections/Subscribe_Newslater";


const Home = () => {

console.log(import.meta.env.VITE_apiKey)
      return (
            <HelmetProvider>
                  <div>
                        <Helmet>
                              <title>Home | Hotel Booking</title>
                              <link rel="icon" type="image/png" href="Images/Icons/home.png" />
                        </Helmet>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(./public/Images/room6-1024x664.jpeg)' }}>
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
                        <div className="my-12">
                              <TestimonialCarousel></TestimonialCarousel>
                        </div>
                        <div className="my-8">
                              <Subscribe_Newslater></Subscribe_Newslater>

                        </div>





                  </div>
            </HelmetProvider>

      );
};

export default Home;