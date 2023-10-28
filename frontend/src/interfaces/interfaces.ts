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