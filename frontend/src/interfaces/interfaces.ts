export interface UserInterface {
    userId: string
    username: string
    email: string
    status: string
    friends: string[]
    chatrooms: string[]
    chats: string[]
}

export interface activeUser{
    username: string
    userId: string
}
export interface userListInterface{
    usersList: activeUser[]
}

export interface messagesInterface{
    sender_id: string
    content: string
    message_id: string
    timestamp: Date
}

export interface currentChatInterface{
    participents: string[],
    messages: messagesInterface[],
    lastMessage: string,
    isGroupChat: boolean,
    chatName: string,
}

export interface chatInfoInterface{
    chatUserName: string,
    chatId: string,
    chatUserId: string,
}

export interface chatListInterface{
    chats: chatInfoInterface[],
}