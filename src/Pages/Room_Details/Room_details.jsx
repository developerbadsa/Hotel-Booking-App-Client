import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Layout/Components/Loading_spinner/Loading';

const Room_details = () => {
      const {title} = useParams()

      const url = `http://localhost:5000/room_details/${title}`
      const { data: booking_details ,isPending,refetch } = useQuery({
            queryKey: ['userBookings'],
            queryFn: async () => {
                const data =await fetch(url)
                return await data.json();
            }
        })

        if(isPending){
            return <Loading></Loading>
        }

         const { _id, RoomID, RoomTitle, RoomDescription, PricePerNight, RoomSize, Availability, RoomImages, SpecialOffers, Reviews } = booking_details;

     

      // console.log(qq)


      return (
            <div>
          
            </div>
      );
};

export default Room_details;