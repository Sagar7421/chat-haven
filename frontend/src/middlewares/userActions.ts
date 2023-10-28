import { getUserById } from "../api/userApi";
import { LOAD_USER } from "../reducers/userSlice";

export const fetchUser = (id: String) => {
    return async (dispatch: any) => {
      try {
        const userData = await getUserById(id);
        dispatch(LOAD_USER(userData.data));
       
      } catch (err) {
        console.log("Error happend in userAction.ts");
      }
    };
  };