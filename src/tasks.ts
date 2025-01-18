import type { Board } from "./board";
import type { Card } from "./card";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

export interface Task extends Model {
  position: number;
  name: string;
  isCompleted: boolean;
  cardId: string;
}

export type TaskCreated = {
  event: "taskCreate";
  data: {
    item: Task;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      cards: [Card];
    };
  };
};

export type TaskUpdated = Omit<TaskCreated, "event"> & { event: "taskUpdate" };
export type TaskDeleted = Omit<TaskCreated, "event"> & { event: "taskDelete" };
