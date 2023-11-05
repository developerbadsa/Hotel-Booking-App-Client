import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import StarRating from "../../../Layout/Components/Rating/Rating";
import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {

      const { _id, RoomID, RoomTitle, RoomDescription, PricePerNight, RoomSize, Availability, RoomImages, SpecialOffers, Reviews } = room;



      const rat = Reviews?.length > 0 ? Reviews.reduce((accumulator, currentValue) => currentValue.Rating + accumulator, 0) / Reviews.length : 0
      const averageRat =parseFloat( rat.toString().slice(0, -1))



      return (

            <div>
                  <div className="flip-card">
                        <div className="flip-card-inner">
                              <div className="flip-card-front">
                                    <img
                                          className="h-full w-full rounded-lg"
                                          src={RoomImages[0]}
                                          alt=""
                                    />
                              </div>
                              <Link to={`/room_details/${RoomTitle}`} className="flip-card-back absolute hero" style={{ backgroundImage: `url(${RoomImages[0]})` }}>
                                   
                                   <div className="bg-transparent z-20 text-center">
                                          <h3 className="font-bold text-xl mb-9">{RoomTitle}</h3>
                                          <p className="text-white text-lg px-4">Offer for you: {SpecialOffers && SpecialOffers}</p>
                                          {
                                                averageRat ? <div className="text-amber-500 flex justify-center gap-6 my-6"><span className="font-bold text-2xl text-amber-200">{averageRat}</span><StarRating rating={averageRat}></StarRating></div> : <div className="my-4 font-extrabold ">Dont Have Any Review</div>
                                          }
                                    </div>

                                    <div className="hero-overlay bg-opacity-70 relative"></div>
                                   </Link>
                        </div>
                  </div>
            </div>
      );
};

export default RoomCard;