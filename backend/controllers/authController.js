const passport = require("passport");
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db/queries');
const { body, validationResult } = require("express-validator");



// Sign up controller
async function signUpPost(req, res, next) {
  const { email, password, username, gender } = req.body;

  try {
      // Hash the password with bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      try {
        await db.insertNewUser({ email, password: hashedPassword, username, gender });
      } catch (dbError) {
        console.error("Database insertion error:", dbError);
        return res.status(500).json({ message: "Error inserting user into database" });
      }

      console.log('User signed up successfully');
      // Send response back to client
      res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
      console.error("Error during sign-up:", error);
      // Send error response
      res.status(500).json({ message: 'Internal server error' });
      return next(error); // Pass the error to the next middleware
  }
}


module.exports = {
    signUpPost
}
