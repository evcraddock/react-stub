import { baseApi } from '../baseApi';

export type Project = {
  id: number;
  name: string;
  description: string;
};

// response from api
type ProjectResponse = {
  projectId: number;
  projectName: string;
  description: string;
};

// object model api post expects
type ProjectInput = {
  projectID?: number;
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
      providesTags: ['Project'],
      transformResponse: (res: ProjectResponse[]) =>
        res.map((p: ProjectResponse) => transformProjectResponse(p)),
    }),
    getProject: builder.query<Project, { id: number }>({
      query: ({ id }) => `/projects/${id}`,
      providesTags: ['Project'],
      transformResponse: (res: ProjectResponse) =>
        transformProjectResponse(res),
    }),
    createProject: builder.mutation<Project, ProjectInput>({
      query(projectInput) {
        return {
          url: 'projects',
          method: 'POST',
          body: projectInput,
        };
      },
      invalidatesTags: ['Project'],
    }),
    updateProject: builder.mutation<
      Project,
      { id: number; projectInput: ProjectInput }
    >({
      query({ id, projectInput }) {
        return {
          url: `projects/${id}`,
          method: 'PUT',
          body: projectInput,
        };
      },
      invalidatesTags: ['Project'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
} = projectsAPI;
