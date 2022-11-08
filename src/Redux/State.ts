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

export const addPost = (postMessage: string) => {
    debugger
    const newPost = {
        id: state.profilePage.postData.length + 1, message: postMessage, likesCount: 0
    }
    state.profilePage.postData.push(newPost)
}