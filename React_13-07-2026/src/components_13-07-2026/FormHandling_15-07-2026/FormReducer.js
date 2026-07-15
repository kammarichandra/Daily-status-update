export const currentState = {
    name: "",
    email: "",
    password: ""
};

export const UPDATE = "UPDATE";

export function FormReducer(state, action) {

    switch (action.type) {

        case UPDATE:
            return {
                ...state,
                [action.field]: action.value
            };

        default:
            return state;
    }
}