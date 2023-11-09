import React from 'react';

const Subscribe_Newslater = () => {
      return (
            <section className="flex items-center h-screen bg-gray-100 font-poppins dark:bg-gray-800 ">
  <div className="justify-center flex-1 mx-auto max-w-7xl ">
    <div
      className="relative px-4 py-4 mx-4 bg-white bg-bottom bg-no-repeat bg-cover rounded-md shadow md:p-10 dark:bg-gray-900"
      style={{
        minHeight: 580,
        backgroundImage: 'url("https://i.postimg.cc/MG2RXhTt/bg.png")'
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center ">
        <div className="max-w-3xl px-4 mx-auto text-center">
          <a
            className="inline-block mb-2 text-orange-500 dark:text-orange-400"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="w-10 h-10 bi bi-envelope-plus"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </a>
          <h2 className="mb-6 text-2xl font-bold tracking-wide text-gray-700 dark:text-gray-300 md:text-5xl">
          Stay in the Loop with Our Exclusive Newsletter
          </h2>
          <p className="mb-6 text-base font-medium text-gray-500 dark:text-gray-400 md:text-lg">
          Welcome to the heart of all things travel and adventure! Our newsletter is your passport to a world of exciting possibilities. Get ready to embark on a journey filled with exclusive deals, insider tips, and the latest updates on the hottest destinations.
          </p>
          <div className="flex flex-wrap justify-center ">
            <input
              className="w-full px-4 py-4 mb-4 text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded dark:border-gray-700 lg:mr-3 dark:placeholder-gray-400 dark:text-gray-300 dark:bg-gray-800 md:mb-0 md:w-1/2"
              type="email"
              placeholder="Type your e-mail"
            />
            <button className="w-full px-6 py-4 text-sm font-semibold text-gray-100 bg-orange-500 rounded md:w-auto md:ml-2 dark:bg-orange-400 dark:hover:bg-orange-500 hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      );
};

export default Subscribe_Newslater;