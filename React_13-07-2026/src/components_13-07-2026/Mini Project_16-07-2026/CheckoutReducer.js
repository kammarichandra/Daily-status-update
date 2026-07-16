
export let initialState = {

    name: "",
    email: "",
    address: ""

};



export function checkoutReducer(state, action) {


    switch (action.type) {


        case CHANGE_INPUT:

            return {

                ...state,

                [action.payload.name]:
                    action.payload.value

            };


        case RESET_FORM:

            return initialState;



        default:

            return state;


    }

}

export let CHANGE_INPUT= "CHANGE_INPUT";

export let RESET_FORM= "RESET_FORM";