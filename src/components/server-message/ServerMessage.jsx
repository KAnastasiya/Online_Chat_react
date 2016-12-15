import './server-message.styl';

export const ServerMessageSuccess = () => (
  <ReactCSSTransitionGroup
    transitionName='serverMessage'
    transitionAppear
    transitionAppearTimeout={1000}
    transitionEnter={false}
    transitionLeave={false}>
    <p className='server-message ok'>Данные сохранены</p>
  </ReactCSSTransitionGroup>
);

export const ServerMessageFail = () => (
  <ReactCSSTransitionGroup
    transitionName='serverMessage'
    transitionAppear
    transitionAppearTimeout={1000}
    transitionEnter={false}
    transitionLeave={false}>
    <p className='server-message error'>Сервис временно недоступен</p>
  </ReactCSSTransitionGroup>
);
