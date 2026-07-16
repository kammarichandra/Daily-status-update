import { useReducer } from "react";

import { checkoutReducer, initialState } from "./CheckoutReducer";



function Checkout() {


    let [state, dispatch] = useReducer(checkoutReducer, initialState);

    function change(e) {


        dispatch({

            type: "UPDATE_FIELD",
            payload: {

                field: e.target.name,
                value: e.target.value
            }

        });

    }

    function submit() {

        dispatch({

            type: "SUBMIT_START"

        });


        setTimeout(() => {

            dispatch({

                type: "SUCCESS"

            });

        }, 1000);


    }

    return (

        <div>


            <h2> Checkout </h2>

            <input name="name" placeholder="Name" onChange={change}  />

            <input name="address" placeholder="Address" onChange={change} />

            <input name="phone" placeholder="Phone" onChange={change} />

            <button onClick={submit}>

                {
                    state.loading
                        ?
                        "Processing..."
                        :
                        "Place Order"
                }

            </button>


        </div>

    );


}


export default Checkout;