// actions are responsible for when the user does something
// trigger that the state needs to update

// 1 increment
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const increment = (amount) => {
    return {
        type: INCREMENT_COUNTER,
        amount
    };
};

// 2 decrement
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const decrement = (amount) => {
    return {
        type: DECREMENT_COUNTER,
        amount
    };
};

// action
// { type: 'somthing-unique', payload }


// actionCreator
// type is required, and upper case / _ is the best practice
// there are examples above in 1 and 2 above

