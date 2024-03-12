const express = require("express");
const router = express.Router();
const { Contact } = require("../models");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.findAll();

    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
});

module.exports = router;
