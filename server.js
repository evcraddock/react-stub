import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.get('/api/health', (_, res) => {
  res.status(200);
});

const projects = [
  { id: 1, name: 'Project One', description: 'Description for Project One' },
  { id: 2, name: 'Project Two', description: 'Description for Project Two' },
];

app.get('/api/projects', (_, res) => {
  res.status(200).json(projects);
});

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Starting node server on port ${port}`);
});

