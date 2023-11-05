import React from 'react';

const Subscribe_Newslater = () => {
      return (
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                  <h1 className="text-2xl font-semibold text-center mb-4">
                        Sign up for our newsletter
                  </h1>
                  <p>Subscribe to get Special Offers and deals. You will get info by email</p>
                  <form action="#" method="post" className="space-y-12 my-12 flex items-end">
                        <div className=" ">
                              <div>
                                    <label htmlFor="email" className="text-gray-600">
                                          Email Address
                                    </label>
                                    <input
                                          type="email"
                                          id="email"
                                          name="email"
                                          className="p-2 border border-amber-800 rounded-md focus:outline-none focus:border-amber-800"
                                          required=""
                                    />
                              </div>
                        </div>
                        <div className="text-center">
                              <button
                                    type="submit"
                                    className="bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-800 transition duration-300"
                              >
                                    Subscribe
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default Subscribe_Newslater;