import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';

// Signup
const signup = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: 'Signup successful.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

// Login
const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // If authentication is successful, you can generate a JWT token for user authentication and send it as a response
    // You would typically use a package like `jsonwebtoken` for this purpose

    return res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
};

export { login, signup };