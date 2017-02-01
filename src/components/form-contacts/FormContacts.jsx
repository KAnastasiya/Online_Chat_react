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
      tips='You left us the following contacts. Update them if necessary'
      btnPrimaryText='Save'
      btnAddText='<< Back to dialog'
      session={session}
      submitFunc={setContacts}
      resetFunc={openDialog}>
      <Input
        type='text'
        id='surname'
        name='surname'
        placeholder='Surname'
        maxlength={35}
        autoFocus />
      <Input
        type='text'
        id='name'
        name='name'
        placeholder='Name'
        maxlength={35} />
      <Input
        type='text'
        id='phone'
        name='phone'
        placeholder='Phone'
        maxlength={13} />
      <Input
        type='text'
        id='email'
        name='email'
        placeholder='E-mail'
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
