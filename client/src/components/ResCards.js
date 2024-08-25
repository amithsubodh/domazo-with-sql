import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ResCards = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/restaurants")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  return (
    <>
      <div className="res-cards">
        <Link to="/restaurants" className="res-heading">
          <h3>Restaurants</h3>
        </Link>
        <div className="res-card">
          {restaurants.map((restaurant, index) => (
            <div
              className="cards-container"
              key={index}
              onClick={() => {
                navigate(`/restaurants/${restaurant.id}`);
              }}
            >
              <div className="card">
                <div className="card-media">
                  <a href={restaurant.website}>
                    <img src={restaurant.imageUrl} alt="" />
                  </a>
                </div>
                <div className="card-description">
                  <div className="about-place">
                    <div className="place">
                      <p className="place-name">{restaurant.name}</p>
                      <p className="place-speciality">
                        {restaurant.speciality}
                      </p>
                    </div>
                    <div className="place-review">
                      <p className="rating">{restaurant.rating}★</p>
                      <p className="per-person">₹ {restaurant.price} per one</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResCards;
