import * as constants from '../constants/constants';

const initialState = {
  processing: false,
  errors: null,
  contacts: {
    name: null,
    surname: null,
    phone: null,
    email: null,
  },
};

const contactState = (state = initialState, action) => {
  switch (action.type) {
    case constants.POST_CONTACTS_REQUEST:
      return {
        ...state,
        processing: true,
      };
    case constants.POST_CONTACTS_OK:
      return {
        ...state,
        processing: false,
        errors: '',
        contacts: {
          surname: action.surname,
          name: action.name,
          phone: action.phone,
          email: action.email,
        },
      };
    case constants.POST_CONTACTS_FAIL:
      return {
        ...state,
        processing: false,
        errors: 'Сервис временно недоступен',
      };
    case constants.LOAD_CONTACTS_REQUEST:
      return {
        ...state,
        processing: true,
      };
    case constants.LOAD_CONTACTS_OK:
      return {
        ...state,
        processing: false,
        errors: null,
        contacts: {
          surname: action.contacts.surname,
          name: action.contacts.name,
          phone: action.contacts.phone,
          email: action.contacts.email,
        },
      };
    case constants.LOAD_CONTACTS_FAIL:
      return {
        ...state,
        processing: false,
        errors: 'Сервис временно недоступен',
      };
    case constants.OPEN_DIALOG:
    case constants.CLOSE_CHAT:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default contactState;
