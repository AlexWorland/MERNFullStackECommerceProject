import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS
} from "../constants/userConstants";

function userSigninReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            console.log("userActionsreducter action.type = user sign in REQUEST");
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            console.log("userActionsreducter action.type = user sign in SUCCESS");
            return {loading: false, userInfo: action.payload}
        case USER_SIGNIN_FAIL:
            console.log("userActionsreducter action.type = user sign in FAIL");
            return {loading: false, error: action.payload}
        default:
            console.log("userActionsreducter action.type = user sign in DEFAULT");
            return state;
    }
}
function userRegisterReducer(state = {}, action) {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            console.log("userActionsreducter action.type = user sign in REQUEST");
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            console.log("userActionsreducter action.type = user sign in SUCCESS");
            return {loading: false, userInfo: action.payload}
        case USER_REGISTER_FAIL:
            console.log("userActionsreducter action.type = user sign in FAIL");
            return {loading: false, error: action.payload}
        default:
            console.log("userActionsreducter action.type = user sign in DEFAULT");
            return state;
    }
}

export {
    userSigninReducer,
    userRegisterReducer
}