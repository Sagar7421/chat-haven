const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
import { Request, Response, NextFunction } from "express";

const JWT_SECRET = "ChatHavenSuperKey";

interface CustomRequest extends Request {
  user?: any; 
}

const loginCheck = (req: CustomRequest, res: Response, next: NextFunction) => {
  
  console.log(req)

  try {
    const authorizationHeader = req.headers.authorization as string;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "You must include a valid Bearer token in the Authorization header",
      });
    }

    let token = authorizationHeader.replace("Bearer ", "");
    token = token.replace("Bearer ", "");
    const decode: any = jwt.verify(token, JWT_SECRET);
    req.user = decode;
    return next();
  } catch (err) {
    res.json({
      message: "Invalid Token",
    });
  }
};

export {loginCheck}