import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
      const goto = useNavigate()
      return (
            <section className="flex items-center h-screen bg-gray-200 font-poppins dark:bg-gray-900">
                  <div className="max-w-6xl px-1 mx-auto lg:px-6 ">
                        <div className="">
                              <div className="flex items-center  justify-center">
                                    <div className="w-full px-2 lg:px-4  lg:mb-0 lg:py-0 py-7 shadow-xl p-20">
                                          <div className="text-center lg:text-left p-20">
                                                <h1 className="inline-block mb-8 font-semibold text-gray-800 text-7xl lg:text-9xl dark:text-gray-400">
                                                      Oops!
                                                </h1>
                                                <h2 className="mb-8 text-2xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-400">
                                                      404 Page not found
                                                </h2>
                                                <p className="mb-8 text-xl text-gray-700 dark:text-gray-400">
                                                      Sorry! we are unable to find the page that you are looking for...
                                                </p>
                                                <div className="flex flex-wrap items-center justify-start">
                                                      <button onClick={()=>goto('/')}
                                                            className="w-full px-8 py-4 mb-8 mr-0 text-base font-medium text-gray-100 uppercase bg-yellow-600 rounded-full lg:w-auto hover:bg-yellow-800 lg:mb-0 lg:mr-4 md:w-full "
                                                      >
                                                            Return Home
                                                      </button>
                                                      <button
                                                            href=""
                                                            className="w-full px-8 py-4 text-base font-medium text-gray-700 uppercase border border-yellow-300 rounded-full dark:border-gray-500 dark:hover:border-yellow-800 dark:text-gray-400 lg:w-auto hover:text-gray-200 dark:hover:text-gray-200 hover:border-yellow-800 md:w-full hover:bg-yellow-800"
                                                      >
                                                            Report Problem
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

      );
};

export default ErrorPage;