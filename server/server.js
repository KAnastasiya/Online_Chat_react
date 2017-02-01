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
  console.log(`OUTGOING MESSAGE (${formatTime(new Date())})`);
  console.log(`User: ${req.body.session}`);
  console.log(`Message: ${req.body.text}`);
  res.sendStatus(200);
});

app.get('/loadMessage', (req, res) => {
  console.log('---------------------------------------------------');
  console.log(`INCOMING MESSAGE (${formatTime(new Date())})`);
  res.json({
    data: {
      message: 'Hello. Your request is being processed, please wait',
      operator: {
        name: 'Hanna Ivanova',
        photoUrl: 'img/operator.jpg',
      },
    },
  });
});

app.post('/setContacts', (req, res) => {
  console.log('---------------------------------------------------');
  console.log(`UPDATING CONTACTS (${formatTime(new Date())})`);
  console.log(`User: ${req.body.session}`);
  if (req.body.contacts.surname) {
    console.log(`Surname: ${req.body.contacts.surname}`);
  }
  if (req.body.contacts.name) {
    console.log(`Name: ${req.body.contacts.name}`);
  }
  if (req.body.contacts.phone) {
    console.log(`Phone: ${req.body.contacts.phone}`);
  }
  if (req.body.contacts.email) {
    console.log(`E-mail: ${req.body.contacts.email}`);
  }
  res.sendStatus(200);
});

app.get('/getContacts', (req, res) => {
  console.log('---------------------------------------------------');
  console.log(`GETTING CONTACTS (${formatTime(new Date())})`);
  res.json({
    contacts: {
      surname: 'Kozenko',
      name: 'Anastasiia',
      phone: '+38 (099) 99-79-388',
      email: 'kozenko.anastasiia@gmail.com',
    },
  });
});

app.listen(3000);
