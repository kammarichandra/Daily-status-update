export let initialstate = {
    user: null,
    isloggedin: false,
};


export let login = "login";
export let updateprofile = "updateprofile";
export let logout = "logout";


export function UserReducer(state, action) {

    switch (action.type) {

        case login:
            return {
                ...state,
                user: action.payload,
                isloggedin: true,
            };


        case updateprofile:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };


        case logout:
            return {
                ...state,
                user: null,
                isloggedin: false,
            };


        default:
            return state;
    }
}