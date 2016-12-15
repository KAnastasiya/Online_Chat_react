import Form from '../form/Form';
import Input from '../input/Input';
import './form-contacts.styl';

const FormContacts = ({ session, setContacts, openDialog }) => (
  <ReactCSSTransitionGroup
    transitionName='contacts'
    transitionAppear
    transitionAppearTimeout={300}
    transitionEnter={false}
    transitionLeave={false}>
    <Form
      type='contacts'
      tips='Вы оставили нам следующие контакты. При необходимости обновите иx'
      btnPrimaryText='Сохранить'
      btnAddText='<< Вернуться к диалогу'
      session={session}
      submitFunc={setContacts}
      resetFunc={openDialog}>
      <Input
        type='text'
        id='surname'
        name='surname'
        placeholder='Фамилия'
        maxlength={35}
        autoFocus />
      <Input
        type='text'
        id='name'
        name='name'
        placeholder='Имя'
        maxlength={35} />
      <Input
        type='text'
        id='phone'
        name='phone'
        placeholder='Телефон'
        maxlength={13} />
      <Input
        type='text'
        id='email'
        name='email'
        placeholder='Электронный адрес'
        maxlength={35} />
    </Form>
  </ReactCSSTransitionGroup>
);

export default FormContacts;

FormContacts.propTypes = {
  session: React.PropTypes.string.isRequired,
  openDialog: React.PropTypes.func.isRequired,
  setContacts: React.PropTypes.func.isRequired,
};
