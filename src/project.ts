import type { Model } from "./model";

export interface Project extends Model {
  name: string;
  background: Background;
  backgroundImage: {
    url: string;
    coverUrl: string;
  } | null;
}

type Background =
  | {
      type: "image";
    }
  | {
      type: "gradient";
      name: Gradients;
    };

type Gradients =
  | "old-lime"
  | "ocean-dive"
  | "tzepesch-style"
  | "jungle-mesh"
  | "strawberry-dust"
  | "purple-rose"
  | "sun-scream"
  | "warm-rust"
  | "sky-change"
  | "green-eyes"
  | "blue-xchange"
  | "blood-orange"
  | "sour-peel"
  | "green-ninja"
  | "algae-green"
  | "coral-reef"
  | "steel-grey"
  | "heat-waves"
  | "velvet-lounge"
  | "purple-rain"
  | "blue-steel"
  | "blueish-curve"
  | "prism-light"
  | "green-mist"
  | "red-curtain";

export type ProjectCreated = {
  event: "projectCreate";
  data: { item: Project };
};

export type ProjectUpdated = Omit<ProjectCreated, "event"> & {
  event: "projectUpdate";
  prevData: { item: Project };
};

export type ProjectDeleted = Omit<ProjectCreated, "event"> & {
  event: "projectDelete";
};
