// server/routes/common/contact-routes.js
const express = require("express");
const { submitContactForm } = require("../../controllers/common/contact-controller"); // Import controller

const router = express.Router();

// Define the POST route for submitting the form
router.post("/send", submitContactForm); // When POST request comes to /api/common/contact/send, run submitContactForm

module.exports = router;