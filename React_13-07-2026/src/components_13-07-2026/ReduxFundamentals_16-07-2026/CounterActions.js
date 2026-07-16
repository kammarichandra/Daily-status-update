export let INC = "INC";
export let DEC = "DEC";
export let RESET = "RESET";
export let INC_BY_FIVE = "INC_BY_FIVE";


export let increment = () => ({
  type: INC,
});


export let decrement = () => ({
  type: DEC,
});


export let reset = () => ({
  type: RESET,
});


export let increaseByFive = () => ({
  type: INC_BY_FIVE,
  payload: 5,
});