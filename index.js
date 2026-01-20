const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from Node.js service 👋'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP'
  });
});


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
