
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Config from "../config";
import { House } from "../types/house"


// const useFetchHouses = (): House[] => {

//   const [houses, setHouses] = useState<House[]>([]);

//   useEffect(() => {

//     const fetchHouses = async () => {
//       const rsp = await fetch(`${config.baseApiUrl}/houses`)
//       const houses = await rsp.json();
//       setHouses(houses)
//     }
//     fetchHouses();
    
//   }, []);
  
//   return houses;
// }


const useFetchHouses = () => {
  return useQuery<House[], AxiosError>("houses", () =>
    axios.get(`${Config.baseApiUrl}/houses`).then((resp) => resp.data)
  );
};

export default useFetchHouses