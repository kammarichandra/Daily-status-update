export let initialState={

    name:"",
    address:"",
    phone:"",
    loading:false,
    error:null

};



export function checkoutReducer(state,action){


switch(action.type){


case "UPDATE_FIELD":

return{

    ...state,

    [action.payload.field]:
    action.payload.value

};



case "SUBMIT_START":

return{

    ...state,

    loading:true

};



case "SUCCESS":

return{

    ...state,

    loading:false,

    error:null

};



case "ERROR":

return{

    ...state,

    loading:false,

    error:"Something went wrong"

};



default:

return state;


}


}