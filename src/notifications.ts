import type { Action } from "./actions";
import type { Board } from "./board";
import type { Card } from "./card";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

export interface Notification extends Model {
  isRead: boolean;
  userId: string;
  actionId: string;
  cardId: string;
}

export type NotificationCreated = {
  event: "notificationCreate";
  data: {
    item: Notification;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      cards: [Card];
      actions: [Action];
    };
  };
};

export type NotificationUpdated = {
  event: "notificationUpdate";
  data: {
    item: Notification;
  };
};
