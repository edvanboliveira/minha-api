const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

// endpoint de healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Servidor na porta 3000');
});
