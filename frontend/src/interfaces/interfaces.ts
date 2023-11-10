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

export interface chat1{
    participents: string[],
    messages: string[],
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