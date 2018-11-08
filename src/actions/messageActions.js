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

