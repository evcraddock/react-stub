import express from 'express';
import bodyParser from 'body-parser';
// import path from 'path';
// import {fileURLToPath} from 'url';
// 
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, './dist')));

// This can be used to host the entire application 
// app.get('/*', (_, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

app.get('/api/health', (_, res) => {
  res.status(200).json({ message: 'Healthy' });
});

const projects = [
  { projectId: 1, projectName: 'Project One', description: 'Description for Project One' },
  { projectId: 2, projectName: 'Project Two', description: 'Description for Project Two' },
  { projectId: 3, projectName: 'Project Three', description: 'Description for Project Three' },
];

app.get('/api/projects', (_, res) => {
  res.status(200).json(projects);
});

app.listen(port, () => {
  console.log(`Starting express server on port ${port}`);
});

