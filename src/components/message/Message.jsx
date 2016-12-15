import { formatTime, playAudio } from '../../utils/js/utils';
import './message.styl';

export default class Message extends React.Component {
  componentDidMount() {
    if (this.props.type === 'org') {
      playAudio('sounds/message.mp3');
    }
  }

  render() {
    const { type, text } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName='message'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div className='chat__message-wrapper'>
          <p className={`chat__message chat__message--${type}`}>
            {text}
            <span className='chat__message-time'>
              {formatTime(new Date())}
            </span>
          </p>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Message.propTypes = {
  type: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};
