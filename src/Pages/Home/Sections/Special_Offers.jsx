import Section_introductopn from "../../../Layout/Components/Section_introductopn";


const Special_Offers = () => {
      return (
            <div className="py-12 my-24" style={{ backgroundImage: 'url(https://i.ibb.co/C5Gysj7/room4-1024x664.jpg)' }}>
                  <div className="text-center my-4 text-white"><Section_introductopn title={'OUR ROOM PRICES'} description={'The Best Prices'} /></div>
                  <div className="px-20 grid lg:grid-cols-3 md:grid justify-center gap-6">
                        {/* Cards */}
                        {/* Card 1 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                              <div className="p-8 text-center">
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-8"> Single Room </h5>
                                    <div className="text-base my-5">
                                          $ <span className="text-3xl">45</span> /Night
                                    </div>
                                    <p className=" font-normal text-gray-700 dark:text-gray-400 mb-12 text-justify">
                                          Enjoy our limited-time 'Single Room' offer for only $45 per night. Experience comfort and savings combined. Don't miss out on this incredible deal! Book now to secure your affordable stay.
                                    </p>
                                    <a
                                          href="#"
                                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-800  hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-800 dark:bg-amber-800 dark:hover:bg-amber-800 dark:focus:ring-amber-800 rounded-none"
                                    >
                                          More Info
                                          <svg
                                                className="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                          >
                                                <path
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                          </svg>
                                    </a>
                              </div>
                        </div>
                        {/* Card 2 */}
                        <div className="max-w-sm bg-amber-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                              <div className="p-8 text-center">
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-8">Small Suite</h5>
                                    <div className="text-base my-5">
                                          $ <span className="text-3xl">55</span> /Night
                                    </div>
                                    <p className=" font-normal text-gray-700 dark:text-gray-400 mb-12 text-justify">Experience our Small Suite special offer at an unbeatable $55 per night. Indulge in comfort and style without breaking the bank. Don't miss this exclusive promotion for a memorable stay.</p>
                                    <a
                                          href="#"
                                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-800  hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-800 dark:bg-amber-800 dark:hover:bg-amber-800 dark:focus:ring-amber-800 rounded-none"
                                    >
                                          More Info
                                          <svg
                                                className="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                          >
                                                <path
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                          </svg>
                                    </a>
                              </div>
                        </div>
                        {/* Card 3 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                              <div className="p-8 text-center">
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-8"> Single Room </h5>
                                    <div className="text-base my-5">
                                          $ <span className="text-3xl">72</span> /Night
                                    </div>
                                    <p className=" font-normal text-gray-700 dark:text-gray-400 mb-12 text-justify">Experience the Apartment of your dreams for just $45 per night. Our special offer brings you comfort and affordability. Book now and indulge in a luxurious stay
                                    </p>
                                    <a
                                          href="#"
                                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-800  hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-800 dark:bg-amber-800 dark:hover:bg-amber-800 dark:focus:ring-amber-800 rounded-none"
                                    >
                                          More Info
                                          <svg
                                                className="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                          >
                                                <path
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                          </svg>
                                    </a>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Special_Offers;