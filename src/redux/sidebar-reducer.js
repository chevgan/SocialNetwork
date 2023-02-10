let initialState = {
    friendsNavBar: [
        {id: 1, name: "Askar", status: 1},
        {id: 2, name: "Bogdan", status: 0}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;