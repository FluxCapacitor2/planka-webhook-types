import type { Board } from "./board";
import type { Card } from "./card";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

export interface CardSubscription extends Model {
  cardId: string;
  userId: string;
}

export type CardSubscriptionCreated = {
  event: "cardSubscriptionCreate";
  data: {
    item: CardSubscription;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      cards: [Card];
    };
  };
};

export type CardSubscriptionDeleted = Omit<CardSubscriptionCreated, "event"> & {
  event: "cardSubscriptionDelete";
};
//todo note card subscription webhook isn't sent if the subscription is auto-created when the card is created
