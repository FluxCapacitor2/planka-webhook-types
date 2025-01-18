import type { Board } from "./board";
import type { Model } from "./model";
import type { Project } from "./project";
import type { User } from "./user";

export type BoardMembership = Model &
  (ViewerMembership | EditorMembership) & {
    boardId: string;
    userId: string;
  };

type ViewerMembership = {
  role: "viewer";
  canComment: boolean;
};

type EditorMembership = {
  role: "editor";
  canComment: null;
};

export type BoardMembershipCreated = {
  event: "boardMembershipCreate";
  data: {
    item: BoardMembership;
    included: { users: [User]; projects: [Project]; boards: [Board] };
  };
};

export type BoardMembershipUpdated = {
  event: "boardMembershipUpdate";
  data: {
    item: BoardMembership;
    included: { projects: [Project]; boards: [Board] };
    prevData: { item: BoardMembership };
  };
};

export type BoardMembershipDeleted = {
  event: "boardMembershipDelete";
  data: {
    item: BoardMembership;
    included: { projects: [Project]; boards: [Board] };
  };
};
