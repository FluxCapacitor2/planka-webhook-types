import type { ActionCreated, ActionDeleted, ActionUpdated } from "./actions";
import type {
  AttachmentCreated,
  AttachmentDeleted,
  AttachmentUpdated,
} from "./attachments";
import type { BoardCreated, BoardDeleted, BoardUpdated } from "./board";
import type {
  BoardMembershipCreated,
  BoardMembershipDeleted,
  BoardMembershipUpdated,
} from "./boardMemberships";
import type { CardCreated, CardDeleted, CardUpdated } from "./card";
import type { CardLabelCreated, CardLabelDeleted } from "./cardLabels";
import type {
  CardMembershipCreated,
  CardMembershipDeleted,
} from "./cardMembership";
import type {
  CardSubscriptionCreated,
  CardSubscriptionDeleted,
} from "./cardSubscriptions";
import type { LabelCreated, LabelDeleted, LabelUpdated } from "./labels";
import type {
  ListCreated,
  ListDeleted,
  ListSorted,
  ListUpdated,
} from "./lists";
import type { NotificationCreated, NotificationUpdated } from "./notifications";
import type { ProjectCreated, ProjectUpdated } from "./project";
import type {
  ProjectManagerCreated,
  ProjectManagerDeleted,
} from "./projectManagers";
import type { TaskCreated, TaskDeleted, TaskUpdated } from "./tasks";
import type { User, UserCreated, UserDeleted, UserUpdated } from "./user";

export type Message = (
  | ActionCreated
  | ActionUpdated
  | ActionDeleted
  | AttachmentCreated
  | AttachmentUpdated
  | AttachmentDeleted
  | BoardCreated
  | BoardUpdated
  | BoardDeleted
  | BoardMembershipCreated
  | BoardMembershipUpdated
  | BoardMembershipDeleted
  | CardLabelCreated
  | CardLabelDeleted
  | CardMembershipCreated
  | CardMembershipDeleted
  | CardSubscriptionCreated
  | CardSubscriptionDeleted
  | CardCreated
  | CardUpdated
  | CardDeleted
  | LabelCreated
  | LabelUpdated
  | LabelDeleted
  | ListCreated
  | ListSorted
  | ListUpdated
  | ListDeleted
  | NotificationCreated
  | NotificationUpdated
  | ProjectCreated
  | ProjectUpdated
  | ProjectManagerCreated
  | ProjectManagerDeleted
  | TaskCreated
  | TaskUpdated
  | TaskDeleted
  | UserCreated
  | UserUpdated
  | UserDeleted
) & {
  user: User;
};
