import {
  INC,
  DEC,
  RESET,
  INC_BY_FIVE
} from "./counterActions";


let initialState = {
  count: 0,
};


function counterReducer(state = initialState, action) {

  switch(action.type) {

    case INC:
      return {
        ...state,
        count: state.count + 1,
      };


    case DEC:
      return {
        ...state,
        count: state.count - 1,
      };


    case RESET:
      return {
        ...state,
        count: 0,
      };


    case INC_BY_FIVE:
      return {
        ...state,
        count: state.count + action.payload,
      };


    default:
      return state;
  }
}


export default counterReducer;