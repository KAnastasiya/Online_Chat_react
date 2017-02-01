const validate = (values) => {
  const errors = {};

  if (!values.message) {
    errors.message = 'Must be filled';
  } else if (values.message && (values.message.length < 5)) {
    errors.message = 'The minimum length - 5 characters';
  }

  if (values.name && (values.name.length < 3)) {
    errors.name = 'The minimum length - 3 characters';
  }

  if (values.surname && (values.surname.length < 3)) {
    errors.surname = 'The minimum length - 3 characters';
  }

  if (!values.phone && !values.email) {
    errors.phone = 'Should be filled at least one field';
    errors.email = 'Should be filled at least one field';
  }

  if (values.phone && (!/^([0-9\+\s-_\(\)])*$/i.test(values.phone))) {
    errors.phone = 'Should be filled in format +38(044)555-55-55';
  }

  if (values.email && (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email))) {
    errors.email = 'Should be filled in format iv@gmail.com';
  }

  return errors;
};

export default validate;
