import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            dispatch(getAuthUserData());
        })
        .catch(error => {
            console.log(error); // обработка ошибок
        });
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            dispatch(setAuthUserData(null, null, null, false));
        })
}
export default authReducer;