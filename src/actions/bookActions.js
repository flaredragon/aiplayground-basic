export const ADD_TAB = 'ADD_TAB';

export function addTab(tabs){
    // Return action
    return {
      // Unique identifier
      type: 'ADD_TAB',
      // Payload
      tabs: tabs
    }
  };