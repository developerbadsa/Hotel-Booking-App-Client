import { useQuery } from '@tanstack/react-query';
import UseUser from '../../Hooks/UseUser';
import Loading from '../../Layout/Components/Loading_spinner/Loading';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { Helmet } from 'react-helmet';

const My_Bookings = () => {
      const { user } = UseUser();
      const [uptStartDate, setStartDate] = useState(null)
      const [uptEndDate, setEndDate] = useState(null)
      const [showModal, setShowModal] = useState(false)
      const [showReviewModal, setShowReviewModal] = useState(false)
      const [rating, setReview] = useState(null)
      const [ReviewText, setReviewText] = useState('')
      const {
            data: bookings,
            isLoading,
            refetch,
      } = useQuery({
            queryKey: ['userBookings'],
            queryFn: async () => {
                  const data = await fetch(
                        `https://hotel-booking-app-server-flame.vercel.app/my_bookings/?email=${user.email}`,
                        { credentials: 'include' }
                  );
                  return await data.json();
            },
      });
      if (isLoading) {
            return <Loading></Loading>;
      }


      return (
            <>
                  <Helmet>
                        <title>Your Booking | Hotel Booking</title>
                        <link rel="icon" type="image/png" href="https://i.ibb.co/NK8zKtP/cart.png" />
                  </Helmet>
                  <section className='items-center lg:flex bg-white rahimbadsa723@gmail.com dark:bg-gray-800'>
                        <div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
                              <div className='pt-4 rounded shadow bg-stone-100 dark:bg-gray-900'>
                                    <div className='flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700'>
                                          <h2 className='mb-4 text-xl font-bold md:mb-0 dark:text-gray-400'>
                                                My Running Booking
                                          </h2>
                                    </div>

                                    <div className='p-4 overflow-x-auto'>
                                          <table className='w-full table-auto'>
                                                <thead>
                                                      <tr className='text-sm text-left text-gray-500 dark:text-gray-400'>
                                                            <th className='flex items-center px-6 pb-3 font-medium dark:text-gray-400'>
                                                                  <span>Name Of Room</span>
                                                            </th>
                                                            <th className='px-6 pb-3 font-medium '>
                                                                  Booking Duration{' '}
                                                            </th>
                                                            <th className='px-6 pb-3 font-medium'>Booking Date </th>
                                                            <th className='px-6 pb-3 font-medium'>Booking Expired </th>
                                                            <th className='px-6 pb-3 font-medium'> Action</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {bookings?.map((booking, index) => {

                                                            const {
                                                                  _id,
                                                                  RoomTitle,
                                                                  BookingTimeDay,
                                                                  endDate,
                                                                  CreateBookingTime,
                                                                  startDate,
                                                            } = booking;


                                                            const handleBookCancel = () => {
                                                                  const nowDate = new Date();
                                                                  const nowDates = new Date(startDate);
                                                                  const differenceInDays =
                                                                        Math.floor(
                                                                              (nowDates - nowDate) / (1000 * 60 * 60 * 24)
                                                                        ) + 1;

                                                                  if (differenceInDays <= 1) {
                                                                        return Swal.fire({
                                                                              title: 'You Cant Cancel',
                                                                              text: 'You cant cancel a booking before 1 day from the booking day.',
                                                                              icon: 'warning',
                                                                              showCancelButton: false,
                                                                              cancelButtonColor: '#5e615d',
                                                                              cancelButtonText: 'Cancel',
                                                                        });
                                                                  }
                                                                  Swal.fire({
                                                                        title: 'Cancel Booking',
                                                                        text: 'Are you sure you want to delete this booking?',
                                                                        icon: 'warning',
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: '#e8850c',
                                                                        cancelButtonColor: '#5e615d',
                                                                        confirmButtonText: 'Yes, I Want Cancel it',
                                                                        cancelButtonText: 'Cancel',
                                                                  }).then(result => {
                                                                        if (result.isConfirmed) {
                                                                              axios
                                                                                    .delete(
                                                                                          `https://hotel-booking-app-server-flame.vercel.app/my_bookings/delete/?deleteBook=${_id}&email=${user.email}&title=${RoomTitle}`
                                                                                    )
                                                                                    .then(() => {
                                                                                          refetch();
                                                                                    })
                                                                                    .catch(err => console.log(err));
                                                                        }
                                                                  });
                                                            };

                                                            const handleReview = (RoomTitle) => {

                                                                  setShowReviewModal(true)

                                                            }
                                                            const handleRatingChange = (event) => {
                                                                  const selectedRating = parseInt(event.target.value);
                                                                  setReview(selectedRating);
                                                            };
                                                            const handleTextChange = (event) => {
                                                                  setReviewText(event.target.value);
                                                            };

                                                            const submitReview = () => {

                                                                  const reviewdata = { UserEmail: user.email, Rating: rating, ReviewText: ReviewText }
                                                                  axios.post(`https://hotel-booking-app-server-flame.vercel.app/room_review?title=${RoomTitle}`, { reviewdata })
                                                                        .then(res => {
                                                                              Swal.fire({
                                                                                    title: "Review added",
                                                                                    icon: "success"
                                                                              });
                                                                              setShowReviewModal(false)
                                                                        })
                                                                        .catch(err => console.log(err))

                                                                        console.log(reviewdata)

                                                            }

                                                            return (
                                                                  <tr
                                                                        key={index}
                                                                        className='text-sm bg-white dark:text-gray-400 dark:bg-gray-800'>
                                                                        {/* ==========Modal for update============== */}
                                                                        <ReactModal
                                                                              isOpen={showModal}
                                                                              onRequestClose={() => setShowModal(false)}
                                                                              contentLabel=""
                                                                              shouldCloseOnOverlayClick={true}
                                                                              shouldCloseOnEsc={true}
                                                                              ariaHideApp={false}
                                                                              style={{
                                                                                    overlay: {
                                                                                          backgroundColor: 'rgba(2, 0, 0, 0.2)',
                                                                                          backdropFilter: 'blur(2px)'
                                                                                    },
                                                                                    content: {
                                                                                          width: '450px',
                                                                                          height: '300px',
                                                                                          margin: 'auto',
                                                                                          padding: '35px 5px',
                                                                                          border: '1px solid black'
                                                                                    },
                                                                              }} >


                                                                              <div className="w-full flex flex-col justify-center items-center">
                                                                                    <h5 className='my-3'>Update Booking Duration</h5>
                                                                                    <div className="flex items-center">

                                                                                          <div className="relative">
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
                                                                                    <div className=' mt-24 flex gap-4'>
                                                                                          <button className="btn bg-amber-800 hover:bg-amber-800 text-white" onClick={() => {

                                                                                                const BookingTimeDay = (new Date(uptEndDate) - new Date(uptStartDate)) / 86400000
                                                                                                if (!uptStartDate || !uptEndDate) {
                                                                                                      return (
                                                                                                            Swal.fire({
                                                                                                                  title: "Please Enter Update Booking and End Date",
                                                                                                                  icon: "warning",
                                                                                                                  confirmButtonText: "OK",
                                                                                                                  customClass: {
                                                                                                                        confirmButton: 'custom-confirm-button',
                                                                                                                  },
                                                                                                            })
                                                                                                      )
                                                                                                } else if (BookingTimeDay < 1) {
                                                                                                      return (Swal.fire({
                                                                                                            title: "Please Make sure Your Booking Date",
                                                                                                            text: `Your Start date is ${uptStartDate} and your End date is ${uptEndDate}. You Need at least one day`,
                                                                                                            icon: "warning",
                                                                                                            confirmButtonText: "OK",
                                                                                                            customClass: {
                                                                                                                  confirmButton: 'custom-confirm-button',
                                                                                                            },
                                                                                                      }))
                                                                                                }
                                                                                                const updatedDateDatas = { updateStartDate: uptStartDate, updateEndDate: uptEndDate, updateBookingTimeDay: BookingTimeDay, RoomTitle }

                                                                                                axios.put(`https://hotel-booking-app-server-flame.vercel.app/my_bookings/update_date?email=${user.email}`, updatedDateDatas)
                                                                                                      .then(() => {
                                                                                                            Swal.fire({
                                                                                                                  title: "Success Changed your Date",
                                                                                                                  icon: "success"
                                                                                                            });
                                                                                                            refetch()
                                                                                                            setShowModal(false)
                                                                                                      })
                                                                                                      .catch(err => console.log(err))
                                                                                          }}>
                                                                                                Update Date
                                                                                          </button>
                                                                                          <button className="btn" onClick={() => setShowModal(false)}>
                                                                                                Close
                                                                                          </button>
                                                                                    </div>

                                                                              </div>
                                                                        </ReactModal>
                                                                        {/* for modal review */}
                                                                        <ReactModal
                                                                              isOpen={showReviewModal}
                                                                              onRequestClose={() => setShowReviewModal(false)}
                                                                              shouldCloseOnOverlayClick={true}
                                                                              shouldCloseOnEsc={true}
                                                                              ariaHideApp={false}
                                                                              style={{
                                                                                    overlay: {
                                                                                          backgroundColor: 'rgba(2, 0, 0, 0.2)',
                                                                                          backdropFilter: 'blur(2px)'
                                                                                    },
                                                                                    content: {
                                                                                          width: '450px',
                                                                                          height: '400px',
                                                                                          margin: 'auto',
                                                                                          padding: '35px 5px',
                                                                                          border: '1px solid black'
                                                                                    },
                                                                              }} >


                                                                              <div className="w-full flex flex-col justify-center items-center">
                                                                                    <h5 className='my-3'>Give Review</h5>

                                                                                    <div  >
                                                                                          <div className=' px-4 my-4 form-control flex flex-col gap-2'>
                                                                                                <select className="select select-bordered w-full max-w-xs" onChange={handleRatingChange}>
                                                                                                      <option disabled value="">Please select here Rating</option>
                                                                                                      <option value="1">1</option>
                                                                                                      <option value="2">2</option>
                                                                                                      <option value="3">3</option>
                                                                                                      <option value="4">4</option>
                                                                                                      <option value="5">5</option>
                                                                                                </select>
                                                                                                <textarea className='textarea textarea-bordered h-24' name=" " onChange={handleTextChange} placeholder='Please Give here review Text' rows=""></textarea>

                                                                                          </div>
                                                                                    </div>
                                                                                    <div className=' mt-10 flex gap-4'>

                                                                                          <button onClick={submitReview}>Submit Review</button>
                                                                                          <button className="btn" onClick={() => setShowReviewModal(false)}>
                                                                                                Close
                                                                                          </button>
                                                                                    </div>

                                                                              </div>
                                                                        </ReactModal>


                                                                        {/* table rows */}
                                                                        <td className='flex items-center px-6 py-5 font-medium'>
                                                                              <p className=''>{RoomTitle}</p>
                                                                        </td>
                                                                        <td className='px-6 py-5 font-medium '>
                                                                              {BookingTimeDay} Days
                                                                        </td>
                                                                        <td className='px-6 py-5 font-medium '>
                                                                              {CreateBookingTime}{' '}
                                                                        </td>
                                                                        <td className='px-6 py-5 font-medium'>{endDate}</td>
                                                                        <td className='flex items-center px-6 py-5 gap-4 '>


                                                                              {/* post review */}

                                                                              <a className='border'>

                                                                                    <button onClick={() => handleReview(RoomTitle)}>  Add Review  </button>
                                                                              </a>
                                                                              {/* Handle Update */}
                                                                              <a
                                                                                    onClick={() => {
                                                                                          setShowModal(true)
                                                                                    }}
                                                                                    className='font-medium text-blue-600 hover:text-blue-500 dark:hover:text-gray-300 dark:text-blue-300'>
                                                                                    <svg
                                                                                          xmlns='http://www.w3.org/2000/svg'
                                                                                          width={16}
                                                                                          height={16}
                                                                                          fill='currentColor'
                                                                                          className='w-4 h-4 mr-3 bi bi-pencil-square'
                                                                                          viewBox='0 0 16 16'>
                                                                                          <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                                                                                          <path
                                                                                                fillRule='evenodd'
                                                                                                d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                                                                                          />
                                                                                    </svg>
                                                                              </a>
                                                                              {/* Handle delete  */}
                                                                              <a
                                                                                    onClick={handleBookCancel}
                                                                                    className='font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400'>
                                                                                    <svg
                                                                                          xmlns='http://www.w3.org/2000/svg'
                                                                                          width={16}
                                                                                          height={16}
                                                                                          fill='currentColor'
                                                                                          className='w-4 h-4 bi bi-trash-fill'
                                                                                          viewBox='0 0 16 16'>
                                                                                          <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
                                                                                    </svg>
                                                                              </a>
                                                                        </td>
                                                                  </tr>
                                                            );
                                                      })}
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
