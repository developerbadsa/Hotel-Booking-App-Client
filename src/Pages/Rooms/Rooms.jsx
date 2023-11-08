import { useQuery } from "@tanstack/react-query";
import RoomCard from "./Sections/RoomCard";
import { useState } from "react";
import Loading from "../../Layout/Components/Loading_spinner/Loading";
import { Helmet } from "react-helmet";


const Rooms = () => {
      const [minPrice, setMinPrice] = useState('');
      const [maxPrice, setMaxPrice] = useState('');
      const [data, setData] = useState([])
      const [show, setShow] = useState(true)


      const { data: rooms, isPending } = useQuery({
            queryKey: ['rooms'],
            queryFn: async () => {
                  const data = await fetch("https://hotel-booking-app-server-flame.vercel.app/rooms")
                  return await data.json();
            }
      })

      if (isPending) {
            return <Loading></Loading>
      }

      const handlePriceFilter = (e) => {
            e.preventDefault()
            const min = parseFloat(minPrice);
            const max = parseFloat(maxPrice);

            const filteredRooms = rooms.filter(room => {
                  const roomPrice = parseFloat(room.PricePerNight);
                  return (isNaN(min) || roomPrice >= min) && (isNaN(max) || roomPrice <= max);
            });
            setData(filteredRooms)
            setShow(false)
      };

      const RoomViewer = show ? rooms : data

      return (
            <div>
                  <Helmet>
                        <title>Rooms | Hotel Booking</title>
                        <link rel="icon" type="image/png" href="/public/Images/Icons/study-room.png" />
                  </Helmet>
                  <div className="flex items-center justify-center py-4 md:py-8 flex-wrap gap-4">
                        <button
                              type="button"
                              className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                        >
                              All categories
                        </button>
                        <button
                              type="button"
                              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        >
                              View All Un Available
                        </button>


                  </div>
                  <h3 className="text-center my-4 text-2xl font-extrabold">Here All Available Rooms: {RoomViewer.length}</h3>
                  <div className="text-center mb-8 mx-auto flex flex-col justify-center">
                        <h4 className="font-bold my-5">Filter Your Product by Price</h4>
                        <form className="flex items-center justify-center space-x-4">
                              <input
                                    name="min"
                                    type="number"
                                    placeholder="Min Price"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="border border-gray-300 rounded-md p-2 w-32"
                              />
                              <input
                                    name="max"
                                    type="number"
                                    placeholder="Max Price"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="border border-gray-300 rounded-md p-2 w-32"
                              />
                              <button
                                    onClick={handlePriceFilter}
                                    className="btn bg-amber-800 hover:bg-amber-800 text-white p-2 rounded-md"
                              >
                                    Apply
                              </button>
                        </form>
                  </div>
                  <div className="grid ml-16 lg:ml-0 grid-cols-1 justify-center md:grid-cols-4 gap-8">
                        {
                              RoomViewer.map((room => <RoomCard key={room._id} room={room}></RoomCard>))
                        }
                  </div>

            </div>
      );
};

export default Rooms;