const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(bodyParser.json());

const formatTime = time => `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

app.post('/sendMessage', (req, res) => {
  console.log('---------------------------------------------------');
  console.log(`ИСХОДЯЩЕЕ СООБЩЕНИЕ (${formatTime(new Date())})`);
  console.log(`Пользователь: ${req.body.session}`);
  console.log(`Сообщение: ${req.body.text}`);
  res.sendStatus(200);
});

app.get('/loadMessage', (req, res) => {
  console.log('---------------------------------------------------');
  console.log(`ВХОДЯЩЕЕ СООБЩЕНИЕ (${formatTime(new Date())})`);
  res.json({
    data: {
      message: 'Добрый день. Ваш вопрос обратывается, ожидайте',
      operator: {
        name: 'Иванова Ольга',
        photoUrl: 'img/operator.jpg',
      },
    },
  });
});

app.post('/setContacts', (req, res) => {
  console.log('---------------------------------------------------');
  console.log(`ОБНОВЛЕНИЕ КОНТАКТОВ (${formatTime(new Date())})`);
  console.log(`Пользователь: ${req.body.session}`);
  if (req.body.contacts.surname) {
    console.log(`Фамилия: ${req.body.contacts.surname}`);
  }
  if (req.body.contacts.name) {
    console.log(`Имя: ${req.body.contacts.name}`);
  }
  if (req.body.contacts.phone) {
    console.log(`Телефон: ${req.body.contacts.phone}`);
  }
  if (req.body.contacts.email) {
    console.log(`Email: ${req.body.contacts.email}`);
  }
  res.sendStatus(200);
});

app.get('/getContacts', (req, res) => {
  console.log('---------------------------------------------------');
  console.log(`ПОЛУЧЕНИЕ КОНТАКТОВ (${formatTime(new Date())})`);
  res.json({
    contacts: {
      surname: 'Козенко',
      name: 'Анастасия',
      phone: '+38 (099) 99-79-388',
      email: 'kozenko.anastasiia@gmail.com',
    },
  });
});

app.listen(3000);
