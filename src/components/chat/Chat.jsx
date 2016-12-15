import ChatBtn from '../chat-btn/ChatBtn';
import ChatWindow from '../chat-window/ChatWindow';

import * as _chatActions from '../../actions/chat';
import * as _messageActions from '../../actions/message';
import * as _contactsActions from '../../actions/contacts';

import './scaffolding.styl';

const mapStateToProps = state => ({
  chat: state.chat,
  message: state.message,
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  chatActions: Redux.bindActionCreators(_chatActions, dispatch),
  messageActions: Redux.bindActionCreators(_messageActions, dispatch),
  contactsActions: Redux.bindActionCreators(_contactsActions, dispatch),
});

let loadMessageTimeout;

const Chat = ({ chat, message, contacts, chatActions, messageActions, contactsActions }) => {
  const openChat = () => chatActions.openChat();
  const autoOpenChat = () => chatActions.autoOpenChat();
  const closeChat = () => chatActions.closeChat();
  const openContacts = () => contactsActions.getContacts();
  const openDialog = () => chatActions.openDialog();
  const sendMessage = (session, text) => messageActions.sendMessage(session, text);
  const setContacts = (session, contactsInfo) => contactsActions.setContacts(session, contactsInfo);

  const loadMessage = () => {
    messageActions.loadMessage();
    loadMessageTimeout = null;
  };

  if (chat.opened && message.needStartLoadIncomingMessage && !loadMessageTimeout) {
    loadMessageTimeout = setTimeout(loadMessage, 10000);
  } else if (!chat.opened) {
    clearTimeout(loadMessageTimeout);
    loadMessageTimeout = null;
  }

  return (
    <div>
      { chat.opened
        ? <ChatWindow
          message={message}
          contacts={contacts}
          session={chat.session}
          tab={chat.tab}
          closeChat={closeChat}
          sendMessage={sendMessage}
          setContacts={setContacts}
          openContacts={openContacts}
          openDialog={openDialog} />
        : <ChatBtn
          needAutoOpened={chat.needAutoOpened}
          openChat={openChat}
          autoOpenChat={autoOpenChat} />
      }
    </div>
  );
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Chat);

Chat.propTypes = {
  chat: React.PropTypes.shape({
    session: React.PropTypes.string,
    opened: React.PropTypes.bool.isRequired,
    needAutoOpened: React.PropTypes.bool.isRequired,
    tab: React.PropTypes.string,
  }),
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
  chatActions: React.PropTypes.shape({
    openChat: React.PropTypes.func,
    closeChat: React.PropTypes.func,
    sendMessage: React.PropTypes.func,
    sendContacts: React.PropTypes.func,
    openDialog: React.PropTypes.func,
    openContacts: React.PropTypes.func,
  }),
  messageActions: React.PropTypes.shape({
    sendMessage: React.PropTypes.func,
    loadMessage: React.PropTypes.func,
  }),
  contactsActions: React.PropTypes.shape({
    sendContacts: React.PropTypes.func,
    loadContacts: React.PropTypes.func,
  }),
};
