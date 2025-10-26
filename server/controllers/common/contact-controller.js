// server/controllers/common/contact-controller.js
const ContactMessage = require("../../models/ContactMessage"); // Import the model

const submitContactForm = async (req, res) => {
  // 1. Kunin ang data mula sa request body
  const { name, email, message } = req.body;

  // 2. Basic Server-side Validation (Optional but recommended)
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // 3. Gumawa ng bagong instance ng ContactMessage model
    const newMessage = new ContactMessage({
      name,
      email,
      message,
    });

    // 4. I-save ang message sa database
    await newMessage.save();

    // 5. Magpadala ng success response
    res.status(201).json({ message: "Message received successfully!" });

  } catch (error) {
    console.error("Error saving contact message:", error);
     // Kung may validation error sa Model, ipapakita dito
    if (error.name === 'ValidationError') {
        // Extract validation messages (optional, for better frontend feedback)
        const messages = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({ message: "Validation failed", errors: messages });
    }
    // Ibang error (e.g., database connection issue)
    res.status(500).json({ message: "Server error. Could not save message." });
  }
};

module.exports = {
  submitContactForm,
};