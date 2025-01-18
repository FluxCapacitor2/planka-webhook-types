import type { Model } from "./model";
import type { Project } from "./project";
import type { User } from "./user";

export interface ProjectManager extends Model {
  projectId: string;
  userId: string;
}

export type ProjectManagerCreated = {
  event: "projectManagerCreate";
  data: {
    item: ProjectManager;
    included: {
      users: [User];
      projects: [Project];
    };
  };
};

export type ProjectManagerDeleted = {
  event: "projectManagerCreate";
  data: {
    item: ProjectManager;
  };
};
