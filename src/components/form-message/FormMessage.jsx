import Form from '../form/Form';
import Input from '../input/Input';
import './form-message.styl';

const FormMessage = ({ session, sendMessage, openContacts }) => (
  <Form
    type='message'
    btnPrimaryText='Send'
    btnAddText='Your contacts'
    session={session}
    submitFunc={sendMessage}
    resetFunc={openContacts}>
    <Input
      id='message'
      name='message'
      placeholder='Enter your message'
      maxlength={200}
      autoFocus />
  </Form>
);

export default FormMessage;

FormMessage.propTypes = {
  session: React.PropTypes.string.isRequired,
  sendMessage: React.PropTypes.func.isRequired,
  openContacts: React.PropTypes.func.isRequired,
};
