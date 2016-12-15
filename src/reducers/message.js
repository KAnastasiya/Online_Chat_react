import * as constants from '../constants/constants';

const initialState = {
  processing: false,
  errors: null,
  messages: [],
  operator: {
    name: null,
    photoUrl: null,
  },
  needStartLoadIncomingMessage: false,
};

const messageState = (state = initialState, action) => {
  switch (action.type) {
    case constants.POST_MESSAGE_REQUEST:
      return {
        ...state,
        processing: true,
      };
    case constants.POST_MESSAGE_OK:
      return {
        ...state,
        processing: false,
        errors: '',
        messages: [
          ...state.messages,
          {
            type: 'user',
            text: action.text,
          },
        ],
        needStartLoadIncomingMessage: true,
      };
    case constants.POST_MESSAGE_FAIL:
      return {
        ...state,
        processing: false,
        errors: 'Сервис временно недоступен',
      };
    case constants.LOAD_MESSAGE_REQUEST:
      return {
        ...state,
        processing: true,
      };
    case constants.LOAD_MESSAGE_OK:
      return {
        ...state,
        processing: false,
        errors: null,
        messages: [
          ...state.messages,
          {
            type: 'org',
            text: action.data.message,
          },
        ],
        operator: {
          name: action.data.operator.name,
          photoUrl: action.data.operator.photoUrl,
        },
      };
    case constants.LOAD_MESSAGE_FAIL:
      return {
        ...state,
        processing: false,
        errors: 'Сервис временно недоступен',
      };
    case constants.CLOSE_CHAT:
      return {
        ...state,
        errors: null,
        messages: [],
        operator: {
          name: null,
          photoUrl: null,
        },
      };
    case constants.LOAD_CONTACTS_OK:
    case constants.OPEN_DIALOG:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default messageState;
