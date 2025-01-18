import type { Board } from "./board";
import type { Card } from "./card";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

export interface CardMembership extends Model {
  cardId: string;
  userId: string;
}

export type CardMembershipCreated = {
  event: "cardMembershipCreate";
  data: {
    item: CardMembership;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      cards: [Card];
    };
  };
};

export type CardMembershipDeleted = Omit<CardMembershipCreated, "event"> & {
  event: "cardMembershipDelete";
};
