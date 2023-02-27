import createError from "http-errors";
import { verifyToken } from "./utils.js";

export const authenticationMiddleware = (req, res, next) => {
  const token = req?.headers["authorization"]?.split(" ")?.[1];
  if (!token) {
    throw createError.Unauthorized();
  }
  const user = verifyToken(token);
  if (!user) {
    throw createError.Forbidden();
  }
  req["user"] = user;
  next();
};
