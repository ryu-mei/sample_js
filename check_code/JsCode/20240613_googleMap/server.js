const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { request } = require('express');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  credentals: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization'
};

app.options('/proxy', cors(corsOptions));

app.options('/proxy', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(204);
});

app.get('/proxy', async (req, res) => {
  const url = 'https://city.kamaishi.iwate.jp/sq/mobilemail/oshirase.html';

  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token-here'
    }
  });
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`server port ${port}`);
});
