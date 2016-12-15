import validate from '../../validations/validate';
import './form.styl';

let Form = ({ type, tips, btnPrimaryText, btnAddText, session, submitFunc, resetFunc, children, handleSubmit, message, name, surname, phone, email }) => {
  const data = () => message || { name, surname, phone, email };

  const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, {
    handleSubmit: handleSubmit(() => submitFunc(session, data())),
  }));

  return (
    <form
      className={`chat__form chat__form--${type}`}
      onSubmit={handleSubmit(() => submitFunc(session, data()))}>
      { tips
        ? <p className='chat__tip'>{tips}</p>
        : null
      }
      {childrenWithProps}
      <div className='chat__controls'>
        <button
          type='button'
          className='btn btn-additional'
          onClick={resetFunc} >
          {btnAddText}
        </button>
        <button
          type='submit'
          className='btn btn-primary'>
          {btnPrimaryText}
        </button>
      </div>
    </form>
  );
};

Form = ReduxForm.reduxForm({
  form: 'main',
  validate,
})(Form);

const selector = ReduxForm.formValueSelector('main');
Form = ReactRedux.connect((state) => {
  const message = selector(state, 'message');
  const name = selector(state, 'name');
  const surname = selector(state, 'surname');
  const phone = selector(state, 'phone');
  const email = selector(state, 'email');
  return {
    initialValues: {
      surname: state.contacts.contacts.surname,
      name: state.contacts.contacts.name,
      phone: state.contacts.contacts.phone,
      email: state.contacts.contacts.email,
    },
    message,
    name,
    surname,
    phone,
    email,
  };
})(Form);

export default Form;

Form.propTypes = {
  type: React.PropTypes.string.isRequired,
  tips: React.PropTypes.string,
  btnPrimaryText: React.PropTypes.string.isRequired,
  btnAddText: React.PropTypes.string,
  children: React.PropTypes.array.isRequired,
  session: React.PropTypes.string.isRequired,
  submitFunc: React.PropTypes.func,
  resetFunc: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  message: React.PropTypes.string,
  name: React.PropTypes.string,
  surname: React.PropTypes.string,
  phone: React.PropTypes.string,
  email: React.PropTypes.string,
};
