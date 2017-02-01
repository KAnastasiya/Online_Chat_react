import Message from '../message/Message';
import FormMessage from '../form-message/FormMessage';
import './dialog.styl';

export default class Dialog extends React.Component {
  componentDidUpdate() {
    this.dialog.scrollTop = this.dialog.scrollHeight;
  }

  render() {
    const { session, messages, sendMessage, openContacts } = this.props;

    const messageList = messages.map((message, index) => (
      <Message
        key={index}
        type={message.type}
        text={message.text} />
    ));

    return (
      <ReactCSSTransitionGroup
        transitionName='dialog'
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}>
        <div
          className='chat__dialog'
          ref={(dialog) => { this.dialog = dialog; }}>
          { messageList.length === 0
            ? <p className='chat__tip'>Welcome. Ask your question. We will be glad to help!</p>
            : null
          }
          {messageList}
        </div>
        <FormMessage session={session} sendMessage={sendMessage} openContacts={openContacts} />
      </ReactCSSTransitionGroup>
    );
  }
}

Dialog.propTypes = {
  session: React.PropTypes.string.isRequired,
  messages: React.PropTypes.array.isRequired,
  sendMessage: React.PropTypes.func.isRequired,
  openContacts: React.PropTypes.func.isRequired,
};
