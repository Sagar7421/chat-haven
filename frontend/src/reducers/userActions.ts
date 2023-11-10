import { getUserById } from "../api/userApi";
import { LOAD_USER } from "./userSlice";

export const fetchUser = (id: string) => {
    return async (dispatch: any) => {
      try {
        const userData = await getUserById(id);
        dispatch(LOAD_USER(userData.data));
       
      } catch (err) {
        console.log("Error happend in userAction.ts");
      }
    };
  };