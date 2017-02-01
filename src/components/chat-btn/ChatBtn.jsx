import { playAudio } from '../../utils/js/utils';
import './chat-btn.styl';

const ChatBtn = ({ needAutoOpened, openChat, autoOpenChat }) => {
  let autoOpenTimeout;

  const handlerClick = () => {
    openChat();
    clearTimeout(autoOpenTimeout);
  };

  if (needAutoOpened) {
    autoOpenTimeout = setTimeout(() => {
      autoOpenChat();
      setTimeout(() => { playAudio('sounds/open.mp3'); }, 1000);
    }, 5000);
  }

  return (
    <ReactCSSTransitionGroup
      transitionName='btnChat'
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
      <button
        type='button'
        className='btn-chat'
        onClick={handlerClick}>
        Write to us
      </button>
    </ReactCSSTransitionGroup>
  );
};

export default ChatBtn;

ChatBtn.propTypes = {
  needAutoOpened: React.PropTypes.bool.isRequired,
  openChat: React.PropTypes.func.isRequired,
  autoOpenChat: React.PropTypes.func.isRequired,
};
