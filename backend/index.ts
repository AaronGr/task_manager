import express from 'express';

const app = express();
const port = 3000

app.use(express.json());

app.get('/api/hello', (req, res) => res.json({ message: 'Hello World' }));

app.listen(port, () => {
  console.log(`task_manager app is listening on port ${port}`)
})