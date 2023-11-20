import { baseApi } from '../baseApi';

export type Project = {
  id: number;
  name: string;
  description: string;
};

type ProjectResponse = {
  projectId: number;
  projectName: string;
  description: string;
};

const transformProjectResponse = (res: ProjectResponse): Project => {
  return {
    id: res.projectId,
    name: res.projectName,
    description: res.description,
  };
};

export const projectsAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => 'projects',
      transformResponse: (res: ProjectResponse[]) =>
        res.map((p: ProjectResponse) => transformProjectResponse(p)),
    }),
  }),
});

export const { useGetProjectsQuery } = projectsAPI;
