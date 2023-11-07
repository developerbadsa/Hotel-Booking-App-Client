import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Layout/Components/Loading_spinner/Loading';
import StarRating from '../../Layout/Components/Rating/Rating';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios, { Axios } from 'axios';
import UseUser from '../../Hooks/UseUser';
import Toast from '../../Layout/Components/Toast_Message/Toast';

const Room_details = () => {
      const { title } = useParams()
      const [startDate, setStartDate] = useState(null)
      const [endDate, setEndDate] = useState(null)
      const [price, setPrice] = useState(0)
      const { user } = UseUser();
      const BookingTimeDay = (new Date(endDate) - new Date(startDate)) / 86400000
      const date = new Date()
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      const CreateBookingTime = `${day}/${month}/${year}`;
      const [modalOpen, setModalOpen] = useState(false);
      const url = `http://localhost:5000/room_details/${title}`
      const goto = useNavigate()

      const { data: booking_details, isPending } = useQuery({
            queryKey: ['userBookings3'],
            queryFn: async () => {
                  const data = await fetch(url)
                  return await data.json();
            }
      })
      useEffect(() => {
            const BookingTime = BookingTimeDay > 0 && BookingTimeDay;

            setPrice(booking_details?.PricePerNight * BookingTime);
      }, [BookingTimeDay])



      if (isPending) {
            return <Loading></Loading>
      }
      const { RoomID, RoomTitle, RoomDescription, PricePerNight, RoomSize, Availability, RoomImages, SpecialOffers, Reviews } = booking_details;
      const BookedData = { BookingTimeDay, startDate, endDate, RoomID, RoomTitle, RoomDescription, PricePerNight, Availability, RoomImages, CreateBookingTime }
      const handleBookButton = (e) => {
            e.preventDefault()
            if (!startDate || !endDate) {
                  return (
                        Swal.fire({
                              title: "Please Enter Booking and End Date",
                              icon: "warning",
                              confirmButtonText: "OK",
                              showCancelButton: true,
                              customClass: {
                                    confirmButton: 'custom-confirm-button',
                              },
                        })
                  )
            }
            setModalOpen(true)
      }
      const handleBookButtonFinal = (e) => {
            e.preventDefault()
            axios.post(`http://localhost:5000/room_details/?email=${user?.email}`, BookedData)
                  .then(() => {
                     
                        axios.put(`http://localhost:5000/room_details/${RoomTitle}`)
                        .then(res=>{
                              console.log(res)
                              goto('/my_bookings')
                        })

                  })
                  .catch(err => console.log(err))

      }


      const rat = Reviews?.length >= 1 ? Reviews?.reduce((accumulator, currentValue) => currentValue.Rating + accumulator, 0) / Reviews?.length : 0
      const averageRat = parseFloat(rat.toString()) !== 0 ? parseFloat(rat.toString()) : false
      return (
            <section className="py-10 font-poppins dark:bg-gray-800">
                  <div className="max-w-6xl px-4 mx-auto">
                        
                  <Toast message={"toastMessage"} show={true} />

                        <div className="flex flex-wrap mb-24 -mx-4">
                              <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">

                                    {/* image */}
                                    <div className="sticky top-0 overflow-hidden ">


                                          {/* product Details main image */}
                                          <div className="relative mb-6 lg:mb-10 lg:h-96">
                                                <img
                                                      className="object-contain w-full lg:h-full"
                                                      src={RoomImages[0]}
                                                      alt={RoomTitle}
                                                />
                                          </div>
                                          {/* small anothers images */}
                                          <div className="flex-wrap hidden -mx-2 md:flex">
                                                {
                                                      RoomImages.map((roomimage, index) => (<div key={index} className="w-1/2 p-2 sm:w-1/4">
                                                            <Link className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                                                            >
                                                                  <img
                                                                        className="object-contain w-full lg:h-28"
                                                                        src={roomimage}
                                                                        alt={RoomTitle}
                                                                  />

                                                            </Link>
                                                      </div>))
                                                }
                                          </div>
                                    </div>
                              </div>
                              {/* details section  */}
                              <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                          <div className="mb-6 ">
                                                {SpecialOffers && <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                                                      {SpecialOffers}
                                                </span>}

                                                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                                      {
                                                            RoomTitle
                                                      }
                                                </h2>
                                                {/* rating */}
                                                {
                                                      averageRat ? <div className="flex flex-wrap items-center mb-6 gap-4">

                                                            {/* Ratings Section  */}
                                                            <div className='text-amber-600 flex gap-4'>
                                                                  <span className='font-bold'>{Reviews?.length > 1 ? "Reviews:" : "Review"} {Reviews?.length}</span>
                                                                  <StarRating rating={averageRat}></StarRating>
                                                            </div>
                                                            <Link
                                                                  className="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                                                  href="#"
                                                            >
                                                                  View All Reviews
                                                            </Link>
                                                      </div> : <div className='my-8 text-slate-500 text-xs ml-5 ' >In This room Rating not Available</div>
                                                }
                                                <p className="inline-block text-2xl font-semibold text-gray-700 my-3 dark:text-gray-400 ">
                                                      <span>${PricePerNight}</span> <span className='text-sm'>/ Per Night</span>
                                                </p>
                                                <span className="bg-green-100 text-green-800 text-xs ml-4 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{Availability}</span>
                                          </div>
                                          <div className="mb-6">

                                                <div className="bg-gray-100 flex items-center justify-start px-6 dark:bg-gray-700 rounded-xl">
                                                      <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                                            Room Size :
                                                      </h2>
                                                      <h2 className="text-base font-semibold text-gray-700 py-4 px-2 dark:text-gray-400">
                                                            {RoomSize}
                                                      </h2>

                                                </div>
                                                <div className='px-4 mt-8'>
                                                      <h5 className='menu-title text-xl font-bold text-slate-600'>Description</h5>
                                                      <p className='text-sm text-slate-600 leading-5 font-normal'>{RoomDescription}</p>
                                                </div>
                                          </div>
                                          <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                                <span className="text-base text-gray-800 dark:text-gray-400 flex flex-col gap-3">
                                                      Availablity <span className="badge badge-accent text-black">{Availability}</span>
                                                </span>
                                          </div>
                                          <div className="mb-6 " />
                                          {/* date pecker */}
                                          <div className="flex flex-wrap items-center mb-6">
                                                <div className="mb-4 mr-4 lg:mb-0">
                                                      <div className="w-full">
                                                            <h5 className='my-3'>Select Booking Duration</h5>
                                                            <div className="flex items-center">

                                                                  <div className="relative">
                                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                              <svg
                                                                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"
                                                                                    viewBox="0 0 20 20"
                                                                              >
                                                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                                              </svg>
                                                                        </div>
                                                                        <input
                                                                              name="start"
                                                                              type="date"
                                                                              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                              placeholder="Select date start"
                                                                              onChange={(e) => { setStartDate(e.target.value) }}
                                                                              required

                                                                        />
                                                                  </div>
                                                                  <span className="mx-4 text-gray-500">to</span>
                                                                  {/* End date */}
                                                                  <div className="relative">
                                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                              <svg
                                                                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"
                                                                                    viewBox="0 0 20 20"
                                                                              >
                                                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                                              </svg>
                                                                        </div>
                                                                        <input
                                                                              name="end"
                                                                              type="date"
                                                                              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                              placeholder="Select date end"
                                                                              onChange={(e) => { setEndDate(e.target.value) }}
                                                                              required
                                                                        />
                                                                  </div>
                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                          <form className="flex gap-4 mb-6">
                                                <Link onClick={handleBookButton}
                                                      className="w-full px-4 py-3 text-center text-white hover:text-white bg-amber-800 border border-transparent dark:border-gray-700 hover:border-amber-800  hover:bg-amber-800 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl text-xl font-bold"
                                                >
                                                      Buy now {price > 0 && price}
                                                </Link>

                                          </form>
                                          {modalOpen && (
                                                <dialog id="my_modal_4" className="modal h-screen bg-[#1d1407ca]" open>
                                                      <div className="modal-box w-11/12 max-w-5xl lg:px-24 py-12">
                                                            <h3 className="font-bold text-lg text-center">You are Going to Book <span className='text-red-600'>{RoomTitle}</span>. Room id is {RoomID}</h3>
                                                            <p className="py-4 text-xs text-slate-500 leading-6">{RoomDescription}</p>
                                                            <p className='font-bold'>Room Size: {RoomSize}</p>
                                                            <div className="overflow-x-auto">
                                                                  <table className="table table-xs my-8">
                                                                        {/* head */}
                                                                        <thead>
                                                                              <tr className='md:text-lg text-black'>
                                                                                    <th>Start Date</th>
                                                                                    <th>End Date</th>
                                                                                    <th>Days</th>
                                                                                    <th>Total Price</th>
                                                                              </tr>
                                                                        </thead>
                                                                        <tbody className='text-xs'>
                                                                              <tr className="bg-base-200 ">
                                                                                    <td className='xs'>{startDate}</td>
                                                                                    <td>{endDate}</td>
                                                                                    <td>{BookingTimeDay}</td>
                                                                                    <td className='font-bold'>${price}</td>
                                                                              </tr>
                                                                        </tbody>
                                                                  </table>
                                                            </div>
                                                            <div className="modal-action">
                                                                  <form method="dialog" className=' flex gap-8'>
                                                                        <button
                                                                              className="btn ml-4 bg-amber-800 text-white hover:bg-amber-800 "
                                                                              onClick={handleBookButtonFinal}
                                                                        >
                                                                              Confirm Proccess Booking
                                                                        </button>
                                                                        <button type='submit'
                                                                              className="btn btn-warning"
                                                                              onClick={() => setModalOpen(false)}
                                                                        >
                                                                              Cancel
                                                                        </button>
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </dialog>
                                          )}


                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

      );
};

export default Room_details;