import { getChatsUserName } from "../api/chatApi";
import { chatListInterface } from "../interfaces/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";


interface Chats {
    chatid: string[],
}

export const getChatList = createAsyncThunk(
    'chatSlice/LOAD_CHAT_LIST',
    async (params: { chatids: any[]; currentUserId: string }, { dispatch, rejectWithValue }) => {
      try {
        const { chatids, currentUserId } = params;
        let resultChatList = [];
        
        const res = await getChatsUserName(chatids, currentUserId);
        const ids = Object.keys(res.data).flat();

        for (const chatid of ids){
            resultChatList.push({username: res.data[chatid].username, user_id: res.data[chatid].user_id, chat_id: chatid})
        }

        console.log("Resultchatlist: ", resultChatList);

        return resultChatList;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


