export const ADD_TAB = 'ADD_TAB';
export const UPDATE_CODE = 'UPDATE_CODE';

export function addTab(tabs){
    // Return action
    return {
      // Unique identifier
      type: 'ADD_TAB',
      // Payload
      tabs: tabs
    }
  };

export function updateCode(data){
    // Return action
    return {
      // Unique identifier
      type: 'UPDATE_CODE',
      // Payload
      data: data
    }
  };