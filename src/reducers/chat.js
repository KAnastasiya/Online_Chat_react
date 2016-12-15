import * as constants from '../constants/constants';
import { generateId } from '../utils/js/utils';

const initialState = {
  session: null,
  opened: false,
  needAutoOpened: true,
  tab: null,
};

const chatState = (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_CHAT:
      return {
        ...state,
        session: generateId('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'),
        opened: true,
        needAutoOpened: false,
        tab: 'dialog',
      };
    case constants.AUTO_OPEN_CHAT:
      return {
        ...state,
        session: generateId('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'),
        opened: true,
        needAutoOpened: false,
        tab: 'dialog',
      };
    case constants.CLOSE_CHAT:
      return {
        ...state,
        opened: false,
      };
    case constants.OPEN_DIALOG:
      return {
        ...state,
        tab: 'dialog',
      };
    case constants.LOAD_CONTACTS_OK:
      return {
        ...state,
        tab: 'contacts',
      };
    default:
      return state;
  }
};

export default chatState;
