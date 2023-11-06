import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import UseUser from "../../Hooks/UseUser";
import Loading from "../../Layout/Components/Loading_spinner/Loading";


const My_Bookings = () => {
      const { user } = UseUser();

      const { data: bookings, isPending, refetch } = useQuery({
            queryKey: ['userBookings'],
            queryFn: async () => {
                  const data = await fetch(`http://localhost:5000/my_bookings/?email=${user.email}`)
                  return await data.json();
            }
      })
      if (isPending) {
            return <Loading></Loading>
      }
      console.log(bookings)
      // const {} = bookings;
      return (
            <>
                  <section className="items-center lg:flex bg-white rahimbadsa723@gmail.com dark:bg-gray-800">
                        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                              <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
                                    <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                                          <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
                                                My Running Booking
                                          </h2>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                          <table className="w-full table-auto">
                                                <thead>
                                                      <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
                                                            <th className="flex items-center px-6 pb-3 font-medium dark:text-gray-400">
                                                                  <span>Name Of Room</span>
                                                            </th>
                                                            <th className="px-6 pb-3 font-medium ">Booking Duration </th>
                                                            <th className="px-6 pb-3 font-medium">Booking Date </th>
                                                            <th className="px-6 pb-3 font-medium">Booking Expired </th>
                                                            <th className="px-6 pb-3 font-medium"> Action</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {bookings?.map(((booking, index) => {

                                                            const { RoomTitle, BookingTimeDay, endDate, CreateBookingTime } = booking;

                                                            return (

                                                                  <tr key={index} className="text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
                                                                        <td className="flex items-center px-6 py-5 font-medium">
                                                                              <p className="">{RoomTitle}</p>
                                                                        </td>
                                                                        <td className="px-6 py-5 font-medium ">{BookingTimeDay} Days</td>
                                                                        <td className="px-6 py-5 font-medium ">{CreateBookingTime} </td>
                                                                        <td className="px-6 py-5 font-medium">{endDate}</td>
                                                                        <td className="flex items-center px-6 py-5 ">
                                                                              <a
                                                                                    href="#"
                                                                                    className="font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300"
                                                                              >
                                                                                    <svg
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          width={16}
                                                                                          height={16}
                                                                                          fill="currentColor"
                                                                                          className="w-4 h-4 mr-3 bi bi-pencil-square"
                                                                                          viewBox="0 0 16 16"
                                                                                    >
                                                                                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                          <path
                                                                                                fillRule="evenodd"
                                                                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                                                          />
                                                                                    </svg>
                                                                              </a>
                                                                              <a
                                                                                    href="#"
                                                                                    className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
                                                                              >
                                                                                    <svg
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          width={16}
                                                                                          height={16}
                                                                                          fill="currentColor"
                                                                                          className="w-4 h-4 bi bi-trash-fill"
                                                                                          viewBox="0 0 16 16"
                                                                                    >
                                                                                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                                    </svg>
                                                                              </a>
                                                                        </td>
                                                                  </tr>


                                                            )
                                                      }))}
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </section>

            </>
      );
};

export default My_Bookings;