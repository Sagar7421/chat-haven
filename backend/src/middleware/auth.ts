const jwt = require("jsonwebtoken");
const userModel = require("../models/users");
import { Request, Response, NextFunction } from "express";

const JWT_SECRET = "ChatHavenSuperKey";

exports.loginCheck = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.token as string;
    token = token.replace("Bearer ", "");
    const decode: any = jwt.verify(token, JWT_SECRET);
    //req.user = decode;
    next();
  } catch (err) {
    res.json({
      error: "You must be logged in",
    });
  }
};