import Chat from './components/chat/Chat';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Chat />
  </ReactRedux.Provider>,
  document.querySelector('.chat'),
);
