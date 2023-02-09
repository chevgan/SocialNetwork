import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsNavReducer from "./friendsNavReducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsNav: friendsNavReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export default store;