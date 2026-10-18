import express from 'express';

const app = express();
const port = 3000;
const host = 'localhost';

app.listen(port, () => {
  console.log(`Running at http://${host}:${port}`);
});