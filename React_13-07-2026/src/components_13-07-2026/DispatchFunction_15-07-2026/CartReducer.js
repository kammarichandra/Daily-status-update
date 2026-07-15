export let initialstate = {

    cart: []

};


export let addtocart = "addtocart";

export let removefromcart = "removefromcart";

export let clear = "clear";



export function CartReducer(state, action) {


    switch(action.type) {


        case addtocart:

            return {

                ...state,

                cart: [
                    ...state.cart,
                    action.payload
                ]

            };



        case removefromcart:

            return {

                ...state,

                cart: state.cart.filter(
                    item => item.id !== action.payload
                )

            };



        case clear:

            return {

                ...state,

                cart: []

            };



        default:

            return state;

    }

}