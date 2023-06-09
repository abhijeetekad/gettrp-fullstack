import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return next(createError(401, "You are not authenticated!"));

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.userId = payload.id;
      req.isSeller = payload.isSeller;
      next();
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
};
