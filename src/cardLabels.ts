import type { Board } from "./board";
import type { Card } from "./card";
import type { List } from "./lists";
import type { Model } from "./model";
import type { Project } from "./project";

export interface CardLabel extends Model {
  cardId: string;
  labelId: string;
}

export type CardLabelCreated = {
  event: "cardLabelCreate";
  data: {
    item: CardLabel;

    included: {
      projects: [Project];
      boards: [Board];
      labels: [CardLabel];
      lists: [List];
      cards: [Card];
    };
  };
};

export type CardLabelDeleted = {
  event: "cardLabelDelete";
  data: {
    item: CardLabel;
    included: {
      projects: [Project];
      boards: [Board];
      lists: [List];
      cards: [Card];
    };
  };
};
