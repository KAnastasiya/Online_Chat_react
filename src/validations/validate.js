const validate = (values) => {
  const errors = {};

  if (!values.message) {
    errors.message = 'Обязательно к заполнению';
  } else if (values.message && (values.message.length < 5)) {
    errors.message = 'Допустимая минимальная длина - 5 символов';
  }

  if (values.name && (values.name.length < 3)) {
    errors.name = 'Допустимая минимальная длина - 3 символов';
  }

  if (values.surname && (values.surname.length < 3)) {
    errors.surname = 'Допустимая минимальная длина - 3 символов';
  }

  if (!values.phone && !values.email) {
    errors.phone = 'Должно быть заполнено хотя бы одно поле';
    errors.email = 'Должно быть заполнено хотя бы одно поле';
  }

  if (values.phone && (!/^([0-9\+\s-_\(\)])*$/i.test(values.phone))) {
    errors.phone = 'Должно быть заполнено в формате +38(044)555-55-55';
  }

  if (values.email && (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email))) {
    errors.email = 'Должно быть заполнено в формате iv@gmail.com';
  }

  return errors;
};

export default validate;
