import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./assets/styles.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ResDetail() {
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/restaurants/${id}`)
      .then((response) => {
        const data = response.data[0];
        setRestaurant(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
      });
  }, [id]);

  const addToCart = async (menuItem) => {
    try {
      await axios.post("http://localhost:3001/carts", {
        food_name: menuItem.name,
        cuisine_type: restaurant.speciality,
        price: menuItem.price,
        restaurant_name: restaurant.name,
        quantity: 1,
        image: menuItem.image,
      });
      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      console.log(
        menuItem.name,
        restaurant.speciality,
        menuItem.price,
        restaurant.name,
        menuItem.image
      );
      alert("Failed to add item to cart");
    }
  };
  return (
    <div>
      <Header />
      {restaurant && (
        <div>
          <div className="res-gallery" id={restaurant.name}>
            {restaurant.imageURL &&
              restaurant.imageURL.map((url, index) => (
                <div
                  key={index}
                  className={`item item${index + 1}`}
                  style={{
                    gridArea:
                      index === 2
                        ? "unset"
                        : index === 1
                        ? "2/3/3/4"
                        : "1/1/3/3",
                  }}
                >
                  <img src={url} alt={restaurant.name} />
                </div>
              ))}
          </div>
          <div className="name-rating" style={{ marginBottom: "2%" }}>
            <h2>{restaurant.name}</h2>
            <section>
              {restaurant.speciality} <br />
              <br />
              {restaurant.location}
              <br />
              <br />
              {restaurant.openingHours}
              <br />
            </section>
            <h1>Order Online</h1>
            {restaurant &&
              restaurant.menu &&
              restaurant.menu.map((menuItem, menuItemIndex) => (
                <div className="order-menu" key={menuItemIndex}>
                  <div>
                    <img src={menuItem.image} alt={menuItem.name} />
                    <div
                      className="add"
                      style={{ margin: "auto" }}
                      onClick={() => addToCart(menuItem)}
                    >
                      ADD
                    </div>
                  </div>
                  <div className="order-det">
                    <h3>{menuItem.name}</h3>
                    <div>
                      <span>₹{menuItem.price}</span>
                    </div>
                    <p>{menuItem.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ResDetail;
