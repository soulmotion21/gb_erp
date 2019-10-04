const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/employees', (req, res) => {
  res.send([
    {"A":[
        {"name":"Ailee", "job":"Junior Develper", "email":"ailee@gbc.com", "cellphone":"+82 10 1234-5678"},
        {"name":"Ailee", "job":"Junior Develper", "email":"ailee@gbc.com", "cellphone":"+82 10 1234-5678"},
        {"name":"Ailee", "job":"Junior Develper", "email":"ailee@gbc.com", "cellphone":"+82 10 1234-5678"},
        {"name":"Ailee", "job":"Junior Develper", "email":"ailee@gbc.com", "cellphone":"+82 10 1234-5678"}
      ]},
    {"B":[
        {"name":"Bilee", "job":"Junior Develper", "email":"bilee@gbc.com", "cellphone":"+82 10 1234-5678"},
        {"name":"Bilee", "job":"Junior Develper", "email":"bilee@gbc.com", "cellphone":"+82 10 1234-5678"},
      ]}
  ]);
});

app.listen(port, () => console.log(`listening on port ${port}`));