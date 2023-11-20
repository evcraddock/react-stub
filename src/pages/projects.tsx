import { useGetProjectsQuery, Project } from '../lib/store/api/projectsApi';

import '../App.css';

const Projects = () => {
  const { data, isLoading, isSuccess } = useGetProjectsQuery();
  const projects = data || [];
  console.log('testing');

  return (
    <>
      <h1>Projects</h1>
      {isLoading && <span>loading...</span>}
      <ul>
        {isSuccess &&
          projects.map((p: Project) => (
            <li key={p.id}>
              {p.name} - {p.description}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Projects;
