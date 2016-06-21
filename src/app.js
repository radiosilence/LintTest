import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('OK');
});

// const x = {bad: 'dict'};

export default app;
