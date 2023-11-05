import { useEffect, useState } from "react";


const Rooms = () => {

const [data, setData] = useState([])

useEffect(()=>{
      fetch('/public/rooms.json')
      .then(res=>res.json())
      .then((dta)=>setData(dta))
      .catch(err=>console.log(err))
},[])

console.log(data)

      return (
            <div>

            </div>
      );
};

export default Rooms;