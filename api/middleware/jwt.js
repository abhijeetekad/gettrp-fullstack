import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = async (req, res, next) => {
  try {
    const currentUser = req.headers.authorization.split(" ")[1];
  const currentUserJSON = await JSON.parse(currentUser)
  const token = currentUserJSON.token;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
  } catch (error) {
    res.send({msg: "auth failed"})
  }
  
};
