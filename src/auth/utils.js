import jwt from "jsonwebtoken";

export const TOKEN_SECRET = "testsecret";

export const generateAccessToken = (user) =>
  jwt.sign(user, TOKEN_SECRET);

export const verifyToken = (token) =>
  jwt.verify(token, TOKEN_SECRET, (error, user) => {
    if (error) return;
    return user;
  });
