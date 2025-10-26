// server/models/ContactMessage.js
const mongoose = require("mongoose");

const ContactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], // Add validation message
      trim: true, // Remove extra whitespace
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true, // Store email in lowercase
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Basic email format validation
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    isRead: { // Optional: Field to track if the admin has read the message
        type: Boolean,
        default: false,
    }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("ContactMessage", ContactMessageSchema);