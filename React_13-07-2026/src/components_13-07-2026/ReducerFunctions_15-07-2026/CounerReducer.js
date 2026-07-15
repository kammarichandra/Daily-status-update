export let initialstate = {
    count: 0,
};

export function CounterReducer(state, action) {

    switch (action.type) {
        case "inc":
            return { ...state, count: state.count + 1 };

        case "dec":
            return { ...state, count: state.count - 1 };

        case "reset":
            return initialstate;

        case "set count":
            return { ...state, count: action.payload };
        default:
            return state;
    }

}

export let inc = "inc";
export let dec = "dec";
export let reset = "reset";
export let setcount = "set count";