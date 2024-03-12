const express = require("express");
const router = express.Router();
const { Restaurant, MenuItem} = require("../models");

// Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});
//by id
router.get("/:id", async (req, res) => {
  const restaurantId = req.params.id;
  try {
    const menuitems = await MenuItem.findAll({
      where: { restaurantId: restaurantId },
    });
    res.json(menuitems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

// Create a new restaurant
router.post("/", async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({ error: "Failed to create restaurant" });
  }
});

module.exports = router;
