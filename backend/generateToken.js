import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  // Generate JWT token with 15 days expiry
  const token = jwt.sign({userId }, process.env.JWT_SECRET, { expiresIn: "15d" });

  // Set the token in an HTTP-only cookie, expires in 15 days
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict", // Prevent CSRF attacks by allowing cookies only from the same site
    secure: process.env.NODE_ENV !=="development",
  });
};

export default generateTokenAndSetCookie;
