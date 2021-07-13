import app from './app';

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log('Server is started on port 3333!');
  console.log('http://localhost:3333');
});
