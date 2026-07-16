import { useReducer } from "react";

import { checkoutReducer , initialState } from "./CheckoutReducer";

import { CHANGE_INPUT } from "./CheckoutReducer";



function Checkout() {


    const [state, dispatch] =
        useReducer(
            checkoutReducer,
            initialState
        );



    return (

        <div className="checkout">

            <h2>
                Checkout
            </h2>


            <input
                placeholder="Name"
                value={state.name}
                onChange={(e) =>

                    dispatch({

                        type: CHANGE_INPUT,

                        payload: {
                            name: "name",
                            value: e.target.value
                        }

                    })

                }
            />



            <input

                placeholder="Email"

                value={state.email}

                onChange={(e) =>

                    dispatch({

                        type: CHANGE_INPUT,

                        payload: {
                            name: "email",
                            value: e.target.value
                        }

                    })

                }

            />



            <input

                placeholder="Address"

                value={state.address}

                onChange={(e) =>

                    dispatch({

                        type: CHANGE_INPUT,

                        payload: {
                            name: "address",
                            value: e.target.value
                        }

                    })

                }

            />


        </div>

    )

}


export default Checkout;