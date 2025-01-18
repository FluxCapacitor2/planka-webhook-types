import type { Board } from "./board";
import type { Model } from "./model";
import type { Project } from "./project";

export interface Label extends Model {
  position: number;
  name: string;
  color: LabelColors;
  boardId: string;
}

type LabelColors =
  | "berry-red"
  | "pumpkin-orange"
  | "lagoon-blue"
  | "pink-tulip"
  | "light-mud"
  | "orange-peel"
  | "bright-moss"
  | "antique-blue"
  | "dark-granite"
  | "lagune-blue"
  | "sunny-grass"
  | "morning-sky"
  | "light-orange"
  | "midnight-blue"
  | "tank-green"
  | "gun-metal"
  | "wet-moss"
  | "red-burgundy"
  | "light-concrete"
  | "apricot-red"
  | "desert-sand"
  | "navy-blue"
  | "egg-yellow"
  | "coral-green"
  | "light-cocoa";

export type LabelCreated = {
  event: "labelCreate";
  data: {
    item: Label;
    included: {
      projects: [Project];
      boards: [Board];
    };
  };
};

export type LabelUpdated = Omit<LabelCreated, "event"> & {
  event: "labelUpdate";
  prevData: { item: Label };
};

export type LabelDeleted = Omit<LabelCreated, "event"> & {
  event: "labelDelete";
};
