import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantityAndSave = (itemId, newQuantity) => {
    // Update the quantity locally
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );

    // Send a request to update the quantity in the database
    axios
      .put(`http://localhost:3001/carts/${itemId}`, {
        quantity: newQuantity,
      })
      .then((response) => {
        console.log("Quantity updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
      });
  };

  const incrementQuantityAndSave = (itemId) => {
    const updatedQuantity =
      cartItems.find((item) => item.id === itemId).quantity + 1;
    updateQuantityAndSave(itemId, updatedQuantity);
  };

  const decrementQuantityAndSave = (itemId) => {
    const updatedQuantity = Math.max(
      cartItems.find((item) => item.id === itemId).quantity - 1,
      1
    );
    updateQuantityAndSave(itemId, updatedQuantity);
  };

  // useEffect(() => {
  //   // Fetch cart items from the database
  //   axios
  //     .get("http://localhost:3001/carts")
  //     .then((response) => {
  //       setCartItems(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching cart items:", error);
  //     });
  // }, []);
  const removeItemFromCart = (itemId) => {
    // Send a DELETE request to remove the item from the database
    axios
      .delete(`http://localhost:3001/carts/${itemId}`)
      .then((response) => {
        console.log("Item removed successfully:", response.data);
        // Update local state to reflect the removal of the item
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemId)
        );
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };

  return (
    <div style={{ backgroundColor: "#eaeded" }}>
      <Header />
      <div className="sub">
        <div className="cart-div">
          <div className="shop-cart">
            <h2>Shopping Cart</h2>
          </div>
          <hr />

          {cartItems.map((item, index) => (
            <div className="order-flex" key={index}>
              <div className="ordered-item-img">
                <img src={item.image} alt="" />
              </div>
              <div className="ordered-details">
                <div className="ordered-food-name">
                  <h3>{item.food_name}</h3>
                </div>
                <div className="ordered-food-des">
                  <p>{item.cuisine_type}</p>
                </div>
                <div className="orderd-food-details">
                  <div className="orderd-food-price">₹{item.price}</div>

                  <div className="veg-nonveg">
                    <svg fill="#BF4C43" width="12" viewBox="0 0 20 20">
                      <path d="M20 4V16C20 18.26 18.26 20 16 20H4C1.76 20 0 18.26 0 16V4C0 1.74 1.76 0 4 0H16C18.26 0 20 1.74 20 4ZM18.34 4C18.34 2.74 17.26 1.66 16 1.66H4C2.76 1.66 1.66 2.74 1.66 4V16C1.66 17.26 2.76 18.34 4 18.34H16C17.26 18.34 18.34 17.26 18.34 16V4Z"></path>
                      <path d="M9.99996 3.75L15.8333 14.5833H4.16663L9.99996 3.75Z"></path>
                    </svg>
                    <p>{item.is_veg ? "veg" : "non veg"}</p>
                  </div>
                  <div className="ordered-food-by">
                    <span>
                      By <a href={item.a}>{item.restaurant_name}</a>
                    </span>
                  </div>
                  <div className="orderd-food-quantity">
                    <button onClick={() => decrementQuantityAndSave(item.id)}>
                      -
                    </button>
                    <div style={{ margin: "5px" }}>{item.quantity}</div>
                    <button onClick={() => incrementQuantityAndSave(item.id)}>
                      +
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div className="sub-total">
            <p>Subtotal: ₹850</p>
          </div>
        </div>
        <div className="total-to-pay">
          <div className="sub-total-to-pay">
            <p>Sub Total ({cartItems.length} item):</p>
            <span>₹850</span>
          </div>
          <hr />
          <div className="bill-detail">
            <div className="bill-details">
              <h5>Bill Details</h5>
            </div>
            <div className="item-total">
              <span>Item Total</span>
              <span>₹850</span>
            </div>
            <div className="del-total">
              <span>Delivery partner fee</span>
              <span>₹20</span>
            </div>
            <hr />
            <form>
              <div className="del-tip">
                <span>Delivery Tip</span>
                <span>
                  <input type="text" placeholder="₹  5" />
                </span>
              </div>
              <div className="fee-total">
                <span>Platform fee</span>
                <span>₹10</span>
              </div>
              <div className="gst-total">
                <span>
                  GST and Restaurant <br />
                  Charges
                </span>
                <span>₹20</span>
              </div>
              <hr />
              <div className="final-total">
                <div className="final-total">
                  <p>To Pay</p>
                </div>
                <div className="final-amt">
                  <span>₹900</span>
                </div>
              </div>
              <div className="proceed-to-pay">
                <input type="submit" value="Proceed to Pay" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
