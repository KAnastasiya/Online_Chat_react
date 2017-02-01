import './server-message.styl';

export const ServerMessageSuccess = () => (
  <ReactCSSTransitionGroup
    transitionName='serverMessage'
    transitionAppear
    transitionAppearTimeout={1000}
    transitionEnter={false}
    transitionLeave={false}>
    <p className='server-message ok'>Data saved</p>
  </ReactCSSTransitionGroup>
);

export const ServerMessageFail = () => (
  <ReactCSSTransitionGroup
    transitionName='serverMessage'
    transitionAppear
    transitionAppearTimeout={1000}
    transitionEnter={false}
    transitionLeave={false}>
    <p className='server-message error'>Service is temporarily unavailable</p>
  </ReactCSSTransitionGroup>
);
