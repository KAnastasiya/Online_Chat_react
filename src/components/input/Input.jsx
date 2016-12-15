import './input.styl';

const renderField = ({ type, id, name, placeholder, handleSubmit, input, autoFocus, meta: { touched, error } }) => {
  const disabledEnterPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div>
      { type
        ? <input
          {...input}
          type='text'
          id={`${id}`}
          className={`chat__input ${touched && error ? 'chat__input_invalid' : ''}`}
          name={name}
          placeholder={placeholder}
          autoFocus={autoFocus} />
        : <textarea
          {...input}
          id={`${id}`}
          className={`chat__textarea ${touched && error ? 'chat__input_invalid' : ''}`}
          name={name}
          placeholder={placeholder}
          onKeyDown={disabledEnterPress}
          autoFocus={autoFocus} />
      }
      <p className='chat__input-error'>
        { touched && error ? error : '' }
      </p>
    </div>
  );
};

const Input = ({ type, id, name, placeholder, maxlength, handleSubmit, autoFocus }) => (
  <div className='chat__field'>
    <ReduxForm.Field
      type={type}
      name={name}
      component={renderField}
      id={id}
      placeholder={placeholder}
      maxLength={maxlength}
      handleSubmit={handleSubmit}
      autoFocus={autoFocus} />
  </div>
);

export default Input;

renderField.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  autoFocus: React.PropTypes.bool,
  input: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onDragStart: React.PropTypes.func.isRequired,
    onDrop: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired,
    __proto__: React.PropTypes.object.isRequired,
  }),
  meta: React.PropTypes.shape({
    touched: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string,
  }),
};

Input.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  maxlength: React.PropTypes.number,
  handleSubmit: React.PropTypes.func,
  autoFocus: React.PropTypes.bool,
};
