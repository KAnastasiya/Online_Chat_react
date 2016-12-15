import Dialog from '../dialog/Dialog';
import FormContacts from '../form-contacts/FormContacts';
import { ServerMessageFail, ServerMessageSuccess } from '../server-message/ServerMessage';
import './chat-window.styl';

const ChatWindow = ({ session, tab, closeChat, sendMessage, setContacts, openContacts, openDialog, message, contacts }) => {
  let serverMessage;
  if (tab === 'dialog') {
    if (!message.processing && message.errors) {
      serverMessage = <ServerMessageFail />;
    }
    if (!contacts.processing && contacts.errors) {
      serverMessage = <ServerMessageFail />;
    }
  } else if (!contacts.processing && contacts.errors === '') {
    serverMessage = <ServerMessageSuccess />;
  } else if (!contacts.processing && contacts.errors) {
    serverMessage = <ServerMessageFail />;
  }

  return (
    <div>
      {serverMessage}
      <ReactCSSTransitionGroup
        transitionName='chat'
        transitionAppear
        transitionAppearTimeout={600}
        transitionEnter={false}
        transitionLeave={false}>
        <div className='chat__wrapper'>
          <div className='chat__header'>
            { message.operator.photoUrl
              ? <ReactCSSTransitionGroup
                transitionName='operInfo'
                transitionAppear
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <img
                  className='chat__header-img'
                  width='50'
                  height='50'
                  src={message.operator.photoUrl}
                  alt='' />
              </ReactCSSTransitionGroup>
              : <img
                className='chat__header-img'
                width='25'
                height='32'
                src='img/chat.svg'
                alt='' />
            }
            { message.operator.name
              ? <ReactCSSTransitionGroup
                transitionName='operInfo'
                transitionAppear
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <div className='chat__header-text'>
                  <p className='chat__header-operatorName'>{message.operator.name}</p>
                  <p className='chat__header-operatorTip'>Консультант</p>
                </div>
              </ReactCSSTransitionGroup>
              : <p className='chat__header-text'>Напишите нам. Мы онлайн!</p>
            }
            <button
              type='button'
              className='btn-close'
              onClick={closeChat} />
          </div>
          <div className='chat__body'>
            { tab === 'contacts'
              ? <FormContacts session={session} setContacts={setContacts} openDialog={openDialog} />
              : <Dialog session={session} messages={message.messages} sendMessage={sendMessage} openContacts={openContacts} />
            }
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default ChatWindow;

ChatWindow.propTypes = {
  session: React.PropTypes.string.isRequired,
  tab: React.PropTypes.string.isRequired,
  message: React.PropTypes.shape({
    processing: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.string,
    messages: React.PropTypes.array,
    operInfo: React.PropTypes.object,
  }),
  contacts: React.PropTypes.shape({
    processing: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.string,
    contacts: React.PropTypes.shape({
      name: React.PropTypes.string,
      surname: React.PropTypes.string,
      phone: React.PropTypes.string,
      email: React.PropTypes.string,
    }),
  }),
  closeChat: React.PropTypes.func.isRequired,
  sendMessage: React.PropTypes.func.isRequired,
  setContacts: React.PropTypes.func.isRequired,
  openContacts: React.PropTypes.func.isRequired,
  openDialog: React.PropTypes.func.isRequired,
};
