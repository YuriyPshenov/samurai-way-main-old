import {StateType} from "../App";

let rerenderEntireTree = (state: StateType) => {
    console.log('State changed')
}

export let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi all', likesCount: 4},
            {id: 2, message: 'Im here now', likesCount: 3},
            {id: 3, message: 'HERE!', likesCount: 10},
            {id: 4, message: 'WOW', likesCount: 4},
            {id: 5, message: 'LOL', likesCount: 7},
            {id: 6, message: 'LOL', likesCount: 7},
            {id: 7, message: 'OMEGALUL', likesCount: 22},
        ],
        newPostText: 'it-kamasutra.com'
    },
    messagesPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo, whats up?'},
            {id: 3, message: 'How are you'},
            {id: 4, message: 'Bro'},
            {id: 5, message: 'Hello'},
        ],
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Valera'},
        ],
    },
    siteBar: {
        friendsData: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Gosha'},
        ],
    },
}



export const addPost = () => {
    const newPost = {
        id: state.profilePage.postData.length + 1, message: state.profilePage.newPostText, likesCount: 0
    }

    state.profilePage.postData.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer // паттерн обсервер
}