

const RoomCard = ({ room }) => {

      const { _id, RoomID, RoomTitle, RoomDescription, PricePerNight, RoomSize, Availability, RoomImages, SpecialOffers, Reviews } = room;
      console.log(Reviews)

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
                              <div className="flip-card-back absolute hero " style={{ backgroundImage: `url(${RoomImages[1]})` }}>
                                    <div className="bg-transparent relative z-20">
                                          <h3 className="font-bold text-lg mb-9">{RoomTitle}</h3>
                                          <p>Offer for you: {SpecialOffers && SpecialOffers}</p>
                                    </div>
                                    
                                    <div className="hero-overlay bg-opacity-60 relative"></div>
                                    {/* <p>{Reviews}</p> */}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default RoomCard;