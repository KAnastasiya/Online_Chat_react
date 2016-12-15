import * as constants from '../constants/constants';

export const openChat = () => ({
  type: constants.OPEN_CHAT,
});

export const autoOpenChat = () => ({
  type: constants.AUTO_OPEN_CHAT,
});

export const closeChat = () => ({
  type: constants.CLOSE_CHAT,
});

export const openDialog = () => ({
  type: constants.OPEN_DIALOG,
});

export const openContacts = () => ({
  type: constants.OPEN_CONTACTS,
});
