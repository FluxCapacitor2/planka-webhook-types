import type { Model } from "./model";

export interface User extends Model {
  email: string;
  isAdmin: boolean;
  name: string;
  username: string | null;
  phone: string | null;
  organization: string | null;
  language: string | null;
  subscribeToOwnCards: boolean;
  deletedAt: string | null;
  isLocked: boolean;
  isRoleLocked: boolean;
  isUsernameLocked: boolean;
  isDeletionLocked: boolean;
  avatarUrl: string | null;
}

export type UserCreated = { event: "userCreate"; data: { item: User } };
export type UserUpdated = {
  event: "userUpdate";
  data: { item: User };
  prevData: { item: User };
};
export type UserDeleted = { event: "userDelete"; data: { item: User } };
