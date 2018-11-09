const initialState = {
    isFetching: false,
    isError: false,
    messages:[
        {
            senderId: "janedoe",
            text: "who'll win?"
        }
    ]
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_MESSAGE":
      const new_data = {
          senderId:"user",
          text:action.message
      }
        return Object.assign({}, state, {
          isFetching: true,
          isError: false,
          messages:[...state.messages,new_data]
        });
      case "FETCHED_MESSAGE":
      const fetched_data = {
        senderId:"Bot",
        text:action.data
      }
        return Object.assign({}, state, {
          isFetching: false,
          isError: false,
          messages:[...state.messages,fetched_data]
        });
      case "RECEIVE_ERROR":
        return Object.assign({}, state, {
          isError: true,
          isFetching: false
        });
      default:
        return state;
    }
  };
  
  export default asyncReducer;