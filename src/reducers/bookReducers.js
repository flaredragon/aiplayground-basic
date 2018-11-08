import {ADD_TAB} from '../actions/bookActions';
const initialState = {
  data: [
    {
      id: 0,
      code: '//type your code...'
    },
    {
      id: 1,
      code: '//type your code.....'
    },
  ],
  tab_count:2
}
export default (state = initialState, action) => {
    switch (action.type){
      case 'ADD_TAB':
            const new_data = {
              id: action.tabs++,
              code: '//type your code...'
            };
            const tabs=action.tabs++;
            return {
                  ...state,
                  data:[...state.data,new_data],
                  tab_count:tabs
            };
      default:
            return state;
    }
  };