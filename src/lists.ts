import type { Board } from "./board";
import type { Card } from "./card";
import type { Model } from "./model";
import type { Project } from "./project";

export interface List extends Model {
  position: number;
  name: string;
  boardId: string;
}

export type ListCreated = {
  event: "listCreate";
  data: {
    item: List;
    included: {
      projects: [Project];
      boards: [Board];
    };
  };
};

export type ListUpdated = {
  event: "listCreate";
  prevData: { item: List };
};

export type ListDeleted = Omit<ListCreated, "event"> & {
  event: "listDelete";
};

export type ListSorted = {
  event: "listSort";
  data: {
    item: List;
    included: {
      cards: Card[];
      projects: [Project];
      boards: [Board];
    };
  };
};
