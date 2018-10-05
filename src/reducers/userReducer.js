const initialState = {
    username: '',
  };
  
  const counterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT_COUNTER") {
      return Object.assign({}, state, {
        count: state.count + action.amount
      });
  
      // return {
      //     ...state,
      //     count: state.count + action.amount
      // };
    }
    if (action.type === "DECREMENT_COUNTER") {
      return Object.assign({}, state, {
        count: state.count - action.amount
      });
  
      // return {
      //     ...state,
      //     count: state.count - action.amount
      // };
  
    } else {
      return state;
    }
  };
  
  export default counterReducer;
  