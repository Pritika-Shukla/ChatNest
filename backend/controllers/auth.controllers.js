import generateTokenAndSetCookie from "../generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, gender, confirmPassword } = req.body;

    if (!fullName || !username || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Default profile picture URLs
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create the user
    const newuser = new User({
      fullName,
      username,
      password: hashedPassword, // Store the hashed password
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newuser) {
      await newuser.save();
      generateTokenAndSetCookie(newuser._id, res);
      res.status(201).json({
        _id: newuser._id,
        username: newuser.username,
        fullName: newuser.fullName,
        profilePic: newuser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Failed to create user" });
    }
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try{
res.cookie("jwt", "", {maxAge:0});
res.status(200).json({message:"Logged Out Sucessfully"})
  }
  catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
