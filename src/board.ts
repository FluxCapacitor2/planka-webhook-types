import type { Model } from "./model";
import type { Project } from "./project";

export interface Board extends Model {
  position: number;
  name: string;
  projectId: string;
}

export type BoardCreated = {
  event: "boardCreate";
  data: { item: Board; included: { projects: [Project] } };
};

export type BoardDeleted = Omit<BoardCreated, "event"> & {
  event: "boardDelete";
};

export type BoardUpdated = Omit<BoardCreated, "event"> & {
  event: "boardUpdate";
  prevData: { item: Board };
};
