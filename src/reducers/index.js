import chat from './chat';
import message from './message';
import contacts from './contacts';

export default Redux.combineReducers({
  chat,
  message,
  contacts,
  form: ReduxForm.reducer,
});
