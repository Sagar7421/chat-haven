import { getChatsUserName, getChatData } from "../api/chatApi";
import { chatListInterface } from "../interfaces/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";


interface Chats {
  chatid: string[],
}

export const getChatList = createAsyncThunk(
  'chatList/LOAD_CHAT_LIST',
  async (params: { chatids: any[]; currentUserId: string }, { dispatch, rejectWithValue }) => {
    try {
      const { chatids, currentUserId } = params;
      let resultChatList = [];

      const res = await getChatsUserName(chatids, currentUserId);
      const ids = Object.keys(res.data).flat();

      for (const chatid of ids) {
        resultChatList.push({ username: res.data[chatid].username, user_id: res.data[chatid].user_id, chat_id: chatid })
      }

      console.log("Resultchatlist: ", resultChatList);

      return resultChatList;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const initializeChat = createAsyncThunk(
  'chatSlice/INIT_CHAT',
  async (params: { chatid: string; currentUserId: string }, { dispatch, rejectWithValue }) => {
    try {
      const { chatid, currentUserId } = params;
      const res = await getChatData(chatid, currentUserId);

      if (res.status === 200) {
        return res.data;
      }
      else {
        return rejectWithValue(500);
      }

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


