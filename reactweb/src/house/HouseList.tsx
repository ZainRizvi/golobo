import useFetchHouses from "../hooks/HouseHooks";
import { House } from "../types/house";

const HouseList = () => {
  // const [houses, setHouses] = useState<House[]>([]);

  // const fetchHouses = async () => {
  //   const rsp = await fetch(`${config.baseApiUrl}/houses`)
  //   const houses = await rsp.json();
  //   setHouses(houses)
  // }
  // fetchHouses();

  const {data} = useFetchHouses();

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((h: House) => (
            <tr key={h.id}>
              <td>{h.address}</td>
              <td>{h.country}</td>
              <td>{h.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HouseList