let  state = {
    profilePage: {
        post: [
            {id: 1, message: "Первый пост", likeCount: 12},
            {id: 2, message: "Второй пост", likeCount: 22},
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: "Салам"},
            {id: 2, message: "Yo"}
        ],
        dialogs: [
            {id: 1, name: "Askar"},
            {id: 2, name: "Bogdan"}
        ]
    },
    friendsNav: {
        friendsNavBar: [
            {id: 1, name: "Askar", status: 1},
            {id: 2, name: "Bogdan", status: 0}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }

    state.profilePage.post.push(newPost);
}

export default state;