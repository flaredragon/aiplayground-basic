import store from '../store/configurestore';
import safeEval from 'safe-eval';
import campK12 from "../class/campk12";

export const ACTIVE_TAB_UPDATE = 'ACTIVE_TAB_UPDATE';

export function updateTab(tab){
    // Return action
    return {
      // Unique identifier
      type: 'ACTIVE_TAB_UPDATE',
      // Payload
      tab: tab
    }
  };


  export const fetch_message = message => {
    return {
      type: "FETCH_MESSAGE",
      message:message
    };
  };
  
  export const receive_message = post => {
    return {
      type: "FETCHED_MESSAGE",
      data: post
    };
  };
  
  export const receive_error = () => {
    return {
      type: "RECEIVE_ERROR"
    };
  };
  
  export const thunk_action_creator = message => {
    store.dispatch(fetch_message(message));
    return function(dispatch, getState) {
      async function executeAsyncTask () {
        const index = store.getState();

        var argumentToEval = `(${index.addTab.data[index.messageReducer.tabActive].code})("${message}")`;
        //console.log("message: " + message);
        try {
          eval(argumentToEval,{add5:campK12.add5,mulRandom:campK12.mulWithRandom,asyncF:campK12.asyncF, sleep: campK12.sleep});
        } catch (e) {
          if (e instanceof SyntaxError) {
              alert(e.message);
          }
        }
        var x = await safeEval(argumentToEval,{add5:campK12.add5,mulRandom:campK12.mulWithRandom,asyncF:campK12.asyncF, sleep: campK12.sleep});
        console.log("x: "+x);
        
        return x;
      }    
      executeAsyncTask()
      .then(data => dispatch(receive_message(data)))
      .catch(err => dispatch(receive_error()));   
    };
  };
