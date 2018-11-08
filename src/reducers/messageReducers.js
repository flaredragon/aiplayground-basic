const initialState = {
    tabActive:"0"
}
export default (state = initialState, action) => {
    switch (action.type){
      case 'ACTIVE_TAB_UPDATE':
            return {
                ...state,
                tabActive:action.tab
            }
      default:
            return state;
    }
  };


