import Form from '../form/Form';
import Input from '../input/Input';
import './form-message.styl';

const FormMessage = ({ session, sendMessage, openContacts }) => (
  <Form
    type='message'
    btnPrimaryText='Отправить'
    btnAddText='Ваши контакты'
    session={session}
    submitFunc={sendMessage}
    resetFunc={openContacts}>
    <Input
      id='message'
      name='message'
      placeholder='Введите сообщение и нажмите Enter'
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
