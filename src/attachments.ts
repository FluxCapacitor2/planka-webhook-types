import type { Board } from "./board";
import type { Card } from "./card";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

export interface Attachment extends Model {
  image: {
    width: number;
    height: number;
  } | null;
  name: string;
  cardId: string;
  creatorUserId: string;
  url: string;
  coverUrl: string;
}

export type AttachmentCreated = {
  event: "attachmentCreate";
  data: {
    item: Attachment;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      cards: [Card];
    };
  };
};

export type AttachmentUpdated = Omit<AttachmentCreated, "event"> & {
  prevData: { item: Attachment };
  event: "attachmentUpdate";
};
export type AttachmentDeleted = Omit<AttachmentCreated, "event"> & {
  event: "attachmentDelete";
};
