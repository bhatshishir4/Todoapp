// backend/controllers/UserController.js
const User = require('../models/Usermodels');

// Register a new user
module.exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Save the user
    const newUser = new User({
      name,
      email,
      password, 
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// Login a user
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

   

   res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};


