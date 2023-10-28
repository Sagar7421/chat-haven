import { Request, Response } from 'express';
import User from '../models/user';

const getAllUsers = async (req: Request, res: Response) => {
    try{
        const users = await User.find({}, 'userId username status');
        return res.json(users);

    } catch (error){
        console.log("GetAllUser Error: ", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getUserById = async (req: Request, res: Response) => {

    console.log("Got user request!");
    console.log(req.params);

    try{
        const {user_id} = req.params;

        if (!user_id){
            return res.status(401).json({message: "Need user_id parameter"});
        }

        const user = await User.findById(user_id);

        if (!user){
            return res.status(404).json({message: "User Not Found"});
        }
        else{
            return res.status(200).json(user)
        }

    } catch (error){
        console.log("GetAllUser Error: ", error);
        return res.status(500).json({ message: 'Internal server error' });
    }

};

const getAllUserExceptCaller = async (req:Request, res: Response) => {
    try{
        const {callerUserId} = req.params;
        
        if (!callerUserId){
            return res.status(401).json({message: "Need to provide caller user id"});
        }

        const users = await User.find({ userId: { $ne: callerUserId } });
        return res.status(200).json(users);

    } catch (error){
        console.log("All user Except Caller: ", error);
        return res.status(500).json({message: "Internal Server Error"});
    }
};


export {getAllUsers, getUserById, getAllUserExceptCaller};