import type { Board } from "./board";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

export interface Card extends Model {
  position: number;
  name: string;
  description: any;
  dueDate: any;
  isDueDateCompleted: any;
  stopwatch: any;
  boardId: string;
  listId: string;
  creatorUserId: string;
  coverAttachmentId: any;
}

export type CardCreated = {
  event: "cardCreate";
  data: {
    item: Card;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
    };
  };
};

export type CardUpdated = Omit<CardCreated, "event"> & {
  event: "cardUpdate";
  prevData: { item: Card };
};

export type CardDeleted = Omit<CardCreated, "event"> & { event: "cardDelete" };
