import type { Board } from "./board";
import type { Card } from "./card";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

/**
 * An Action represents something a user does that triggers a notification for all users subscribed to that action.
 * When an Action is created, Planka also attempts to send webhooks to Google Chat, Slack, etc.
 */
export type Action = Model &
  (CreateCardAction | MoveCardAction | CommentCardAction) & {
    cardId: string;
    userId: string;
  };

export type CreateCardAction = {
  type: "createCard";
  data: {
    list: { id: string; name: string };
  };
};

export type MoveCardAction = {
  type: "moveCard";
  data: {
    fromList: { id: string; name: string };
    toList: { id: string; name: string };
  };
};

export type CommentCardAction = {
  type: "commentCard";
  data: {
    text: string;
  };
};

export type ActionCreated = {
  event: "actionCreate";
  data: {
    item: Action;

    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      card: [Card];
    };
  };
};

export type ActionUpdated = {
  event: "actionUpdate";
  data: {
    item: Action;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      card: [Card];
    };
  };
  prevData: { item: Action };
};

export type ActionDeleted = {
  event: "actionDelete";
  data: {
    item: Action;

    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      card: [Card];
    };
  };
};
