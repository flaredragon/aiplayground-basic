export const ADD_TAB = 'ADD_TAB';
export const UPDATE_CODE = 'UPDATE_CODE';

export function addTab(tabs){
    return {
      type: 'ADD_TAB',
      tabs: tabs
    }
  };

export function updateCode(data){
    return {
      type: 'UPDATE_CODE',
      data: data
    }
  };