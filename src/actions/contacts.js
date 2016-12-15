import request from 'axios';
import * as constants from '../constants/constants';
import CONFIG from '../config';

export const setContacts = (session, contacts) => (dispatch) => {
  dispatch({
    type: constants.POST_CONTACTS_REQUEST,
  });

  request
  .post(`${CONFIG.server_path}/setContacts`, {
    session,
    contacts,
  })
  .then(() => {
    dispatch({
      type: constants.POST_CONTACTS_OK,
      contacts,
    });
  })
  .catch(() => {
    dispatch({
      type: constants.POST_CONTACTS_FAIL,
    });
  });
};

export const getContacts = session => (dispatch) => {
  dispatch({
    type: constants.LOAD_CONTACTS_REQUEST,
  });

  request
  .get(`${CONFIG.server_path}/getContacts`, {
    params: {
      session,
    },
  })
  .then((response) => {
    dispatch({
      type: constants.LOAD_CONTACTS_OK,
      contacts: response.data.contacts,
    });
  })
  .catch(() => {
    dispatch({
      type: constants.LOAD_CONTACTS_FAIL,
    });
  });
};
