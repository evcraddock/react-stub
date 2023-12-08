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
  { projectId: 1, projectName: 'Project 1', description: 'Dang old project man' },
  { projectId: 2, projectName: 'Project 2', description: 'Description for Project 2' },
  { projectId: 3, projectName: 'Project 3', description: 'Description for Project 3' },
];

app.get('/api/projects', (_, res) => {
  res.status(200).json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const project = projects.find(p => p.projectId === id);

  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
});

app.post('/api/projects', (req, res) => {
  const project = req.body;
  const nextid = len(projects) + 1;

  project.projectid = nextid;

  res.status(201).json(project);
});

app.put('/api/projects/:id', (req, res) => {
  const project = req.body;

  res.status(200).json(project);
});

app.listen(port, () => {
  console.log(`Starting express server on port ${port}`);
});

