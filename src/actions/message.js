import request from 'axios';
import * as constants from '../constants/constants';
import CONFIG from '../config';

export const sendMessage = (session, text) => (dispatch) => {
  dispatch({
    type: constants.POST_MESSAGE_REQUEST,
  });

  request
  .post(`${CONFIG.server_path}/sendMessage`, {
    session,
    text,
  })
  .then(() => {
    dispatch({
      type: constants.POST_MESSAGE_OK,
      text,
    });
    dispatch(ReduxForm.reset('main'));
  })
  .catch(() => {
    dispatch({
      type: constants.POST_MESSAGE_FAIL,
    });
  });
};

export const loadMessage = session => (dispatch) => {
  dispatch({
    type: constants.LOAD_MESSAGE_REQUEST,
  });

  request
  .get(`${CONFIG.server_path}/loadMessage`, {
    params: {
      session,
    },
  })
  .then((response) => {
    dispatch({
      type: constants.LOAD_MESSAGE_OK,
      data: response.data.data,
    });
  })
  .catch(() => {
    dispatch({
      type: constants.LOAD_MESSAGE_FAIL,
    });
  });
};
