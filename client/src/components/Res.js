import axios from "axios";
import { useEffect, useState } from "react";

function Res() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/restaurants").then((response) => {
      setListOfRestaurants(response.data);
    });
  }, []);

  return (
    <div>
      {listOfRestaurants.map((restaurant) => {
        return (
          <div key={restaurant.restaurant_id} className="restaurant">
            <div className="name">{restaurant.name}</div>
            <div className="address">{restaurant.address}</div>
            <div className="phone">{restaurant.phone}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Res;
