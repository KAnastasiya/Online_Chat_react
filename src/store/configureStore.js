import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [thunk];

const configureStore = () => {
  if (NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }
  return Redux.compose(Redux.applyMiddleware(...middlewares))(Redux.createStore)(rootReducer);
};

export default configureStore;
