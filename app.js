function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else {
    return state;
  }
}

const incrememtAction = { type: "INCREMENT" };

console.log(reducer(0, incrememtAction));
console.log(reducer(1, incrememtAction));
console.log(reducer(5, incrememtAction));

const unknownAction = { type: "UNKNOWN" };

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));
