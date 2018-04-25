function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}

const incrememtAction = { type: "INCREMENT", amount: 5 };

console.log(reducer(0, incrememtAction));
console.log(reducer(1, incrememtAction));

const decrementAction = { type: "DECREMENT", amount: 11 };

console.log(reducer(100, decrementAction));
