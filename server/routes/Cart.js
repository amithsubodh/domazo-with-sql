const express = require("express");
const router = express.Router();
const { Cart } = require("../models");

// Get all cart items
router.get("/", async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.json(carts);
  } catch (error) {
    console.error("Error fetching cart items:", error); // Log the actual error
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// Create a new cart item
router.post("/", async (req, res) => {
  try {
    const newItem = await Cart.create(req.body);
    res.status(201).json(newItem); // Sending back the newly created item in the response
  } catch (error) {
    console.error("Error creating item in cart:", error);
    res.status(500).json({ error: "Failed to create item in cart" });
  }
});

router.put("/:id", async (req, res) => {
  const itemId = req.params.id;
  const { quantity } = req.body;

  try {
    const updatedCartItem = await Cart.update(
      { quantity: quantity },
      { where: { id: itemId } }
    );
    res.json(updatedCartItem);
  } catch (error) {
    console.error("Error updating quantity:", error);
    res.status(500).json({ error: "Failed to update quantity" });
  }
});
// Delete a cart item by ID
router.delete("/:id", async (req, res) => {
  const cartItemId = req.params.id;
  try {
    // Find the cart item by ID and delete it
    const deletedCartItem = await Cart.destroy({
      where: {
        id: cartItemId,
      },
    });

    if (deletedCartItem) {
      res.status(200).json({ message: "Cart item deleted successfully" });
    } else {
      res.status(404).json({ error: "Cart item not found" });
    }
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ error: "Failed to delete cart item" });
  }
});

module.exports = router;
