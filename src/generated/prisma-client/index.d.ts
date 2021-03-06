// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  task: (where?: TaskWhereInput) => Promise<boolean>;
  todo: (where?: TodoWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  task: (where: TaskWhereUniqueInput) => TaskNullablePromise;
  tasks: (args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Task>;
  tasksConnection: (args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TaskConnectionPromise;
  todo: (where: TodoWhereUniqueInput) => TodoNullablePromise;
  todoes: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Todo>;
  todoesConnection: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TodoConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTask: (data: TaskCreateInput) => TaskPromise;
  updateTask: (args: {
    data: TaskUpdateInput;
    where: TaskWhereUniqueInput;
  }) => TaskPromise;
  updateManyTasks: (args: {
    data: TaskUpdateManyMutationInput;
    where?: TaskWhereInput;
  }) => BatchPayloadPromise;
  upsertTask: (args: {
    where: TaskWhereUniqueInput;
    create: TaskCreateInput;
    update: TaskUpdateInput;
  }) => TaskPromise;
  deleteTask: (where: TaskWhereUniqueInput) => TaskPromise;
  deleteManyTasks: (where?: TaskWhereInput) => BatchPayloadPromise;
  createTodo: (data: TodoCreateInput) => TodoPromise;
  updateTodo: (args: {
    data: TodoUpdateInput;
    where: TodoWhereUniqueInput;
  }) => TodoPromise;
  updateManyTodoes: (args: {
    data: TodoUpdateManyMutationInput;
    where?: TodoWhereInput;
  }) => BatchPayloadPromise;
  upsertTodo: (args: {
    where: TodoWhereUniqueInput;
    create: TodoCreateInput;
    update: TodoUpdateInput;
  }) => TodoPromise;
  deleteTodo: (where: TodoWhereUniqueInput) => TodoPromise;
  deleteManyTodoes: (where?: TodoWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  task: (
    where?: TaskSubscriptionWhereInput
  ) => TaskSubscriptionPayloadSubscription;
  todo: (
    where?: TodoSubscriptionWhereInput
  ) => TodoSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TaskOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC";

export type TodoOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type TaskWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TaskWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  createdBy?: Maybe<UserWhereInput>;
  todos_every?: Maybe<TodoWhereInput>;
  todos_some?: Maybe<TodoWhereInput>;
  todos_none?: Maybe<TodoWhereInput>;
  AND?: Maybe<TaskWhereInput[] | TaskWhereInput>;
  OR?: Maybe<TaskWhereInput[] | TaskWhereInput>;
  NOT?: Maybe<TaskWhereInput[] | TaskWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  tasks_every?: Maybe<TaskWhereInput>;
  tasks_some?: Maybe<TaskWhereInput>;
  tasks_none?: Maybe<TaskWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface TodoWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  taskId?: Maybe<TaskWhereInput>;
  createdBy?: Maybe<UserWhereInput>;
  AND?: Maybe<TodoWhereInput[] | TodoWhereInput>;
  OR?: Maybe<TodoWhereInput[] | TodoWhereInput>;
  NOT?: Maybe<TodoWhereInput[] | TodoWhereInput>;
}

export type TodoWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface TaskCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description: String;
  createdBy?: Maybe<UserCreateOneWithoutTasksInput>;
  todos?: Maybe<TodoCreateManyWithoutTaskIdInput>;
}

export interface UserCreateOneWithoutTasksInput {
  create?: Maybe<UserCreateWithoutTasksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutTasksInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
}

export interface TodoCreateManyWithoutTaskIdInput {
  create?: Maybe<TodoCreateWithoutTaskIdInput[] | TodoCreateWithoutTaskIdInput>;
  connect?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
}

export interface TodoCreateWithoutTaskIdInput {
  id?: Maybe<ID_Input>;
  name: String;
  createdBy: UserCreateOneInput;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  tasks?: Maybe<TaskCreateManyWithoutCreatedByInput>;
}

export interface TaskCreateManyWithoutCreatedByInput {
  create?: Maybe<
    TaskCreateWithoutCreatedByInput[] | TaskCreateWithoutCreatedByInput
  >;
  connect?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
}

export interface TaskCreateWithoutCreatedByInput {
  id?: Maybe<ID_Input>;
  name: String;
  description: String;
  todos?: Maybe<TodoCreateManyWithoutTaskIdInput>;
}

export interface TaskUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  createdBy?: Maybe<UserUpdateOneWithoutTasksInput>;
  todos?: Maybe<TodoUpdateManyWithoutTaskIdInput>;
}

export interface UserUpdateOneWithoutTasksInput {
  create?: Maybe<UserCreateWithoutTasksInput>;
  update?: Maybe<UserUpdateWithoutTasksDataInput>;
  upsert?: Maybe<UserUpsertWithoutTasksInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutTasksDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserUpsertWithoutTasksInput {
  update: UserUpdateWithoutTasksDataInput;
  create: UserCreateWithoutTasksInput;
}

export interface TodoUpdateManyWithoutTaskIdInput {
  create?: Maybe<TodoCreateWithoutTaskIdInput[] | TodoCreateWithoutTaskIdInput>;
  delete?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  connect?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  set?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  disconnect?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  update?: Maybe<
    | TodoUpdateWithWhereUniqueWithoutTaskIdInput[]
    | TodoUpdateWithWhereUniqueWithoutTaskIdInput
  >;
  upsert?: Maybe<
    | TodoUpsertWithWhereUniqueWithoutTaskIdInput[]
    | TodoUpsertWithWhereUniqueWithoutTaskIdInput
  >;
  deleteMany?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
  updateMany?: Maybe<
    TodoUpdateManyWithWhereNestedInput[] | TodoUpdateManyWithWhereNestedInput
  >;
}

export interface TodoUpdateWithWhereUniqueWithoutTaskIdInput {
  where: TodoWhereUniqueInput;
  data: TodoUpdateWithoutTaskIdDataInput;
}

export interface TodoUpdateWithoutTaskIdDataInput {
  name?: Maybe<String>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  tasks?: Maybe<TaskUpdateManyWithoutCreatedByInput>;
}

export interface TaskUpdateManyWithoutCreatedByInput {
  create?: Maybe<
    TaskCreateWithoutCreatedByInput[] | TaskCreateWithoutCreatedByInput
  >;
  delete?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  connect?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  set?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  disconnect?: Maybe<TaskWhereUniqueInput[] | TaskWhereUniqueInput>;
  update?: Maybe<
    | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    | TaskUpdateWithWhereUniqueWithoutCreatedByInput
  >;
  upsert?: Maybe<
    | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    | TaskUpsertWithWhereUniqueWithoutCreatedByInput
  >;
  deleteMany?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
  updateMany?: Maybe<
    TaskUpdateManyWithWhereNestedInput[] | TaskUpdateManyWithWhereNestedInput
  >;
}

export interface TaskUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput;
  data: TaskUpdateWithoutCreatedByDataInput;
}

export interface TaskUpdateWithoutCreatedByDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  todos?: Maybe<TodoUpdateManyWithoutTaskIdInput>;
}

export interface TaskUpsertWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput;
  update: TaskUpdateWithoutCreatedByDataInput;
  create: TaskCreateWithoutCreatedByInput;
}

export interface TaskScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  AND?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
  OR?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
  NOT?: Maybe<TaskScalarWhereInput[] | TaskScalarWhereInput>;
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput;
  data: TaskUpdateManyDataInput;
}

export interface TaskUpdateManyDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface TodoUpsertWithWhereUniqueWithoutTaskIdInput {
  where: TodoWhereUniqueInput;
  update: TodoUpdateWithoutTaskIdDataInput;
  create: TodoCreateWithoutTaskIdInput;
}

export interface TodoScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
  OR?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
  NOT?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
}

export interface TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput;
  data: TodoUpdateManyDataInput;
}

export interface TodoUpdateManyDataInput {
  name?: Maybe<String>;
}

export interface TaskUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface TodoCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  taskId: TaskCreateOneWithoutTodosInput;
  createdBy: UserCreateOneInput;
}

export interface TaskCreateOneWithoutTodosInput {
  create?: Maybe<TaskCreateWithoutTodosInput>;
  connect?: Maybe<TaskWhereUniqueInput>;
}

export interface TaskCreateWithoutTodosInput {
  id?: Maybe<ID_Input>;
  name: String;
  description: String;
  createdBy?: Maybe<UserCreateOneWithoutTasksInput>;
}

export interface TodoUpdateInput {
  name?: Maybe<String>;
  taskId?: Maybe<TaskUpdateOneRequiredWithoutTodosInput>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
}

export interface TaskUpdateOneRequiredWithoutTodosInput {
  create?: Maybe<TaskCreateWithoutTodosInput>;
  update?: Maybe<TaskUpdateWithoutTodosDataInput>;
  upsert?: Maybe<TaskUpsertWithoutTodosInput>;
  connect?: Maybe<TaskWhereUniqueInput>;
}

export interface TaskUpdateWithoutTodosDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  createdBy?: Maybe<UserUpdateOneWithoutTasksInput>;
}

export interface TaskUpsertWithoutTodosInput {
  update: TaskUpdateWithoutTodosDataInput;
  create: TaskCreateWithoutTodosInput;
}

export interface TodoUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  tasks?: Maybe<TaskUpdateManyWithoutCreatedByInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface TaskSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TaskWhereInput>;
  AND?: Maybe<TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput>;
  OR?: Maybe<TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput>;
  NOT?: Maybe<TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput>;
}

export interface TodoSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TodoWhereInput>;
  AND?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
  OR?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
  NOT?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Task {
  id: ID_Output;
  name: String;
  createdAt: DateTimeOutput;
  description: String;
}

export interface TaskPromise extends Promise<Task>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  createdBy: <T = UserPromise>() => T;
  todos: <T = FragmentableArray<Todo>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TaskSubscription
  extends Promise<AsyncIterator<Task>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  createdBy: <T = UserSubscription>() => T;
  todos: <T = Promise<AsyncIterator<TodoSubscription>>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TaskNullablePromise
  extends Promise<Task | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  createdBy: <T = UserPromise>() => T;
  todos: <T = FragmentableArray<Todo>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  tasks: <T = FragmentableArray<Task>>(args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  tasks: <T = Promise<AsyncIterator<TaskSubscription>>>(args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  tasks: <T = FragmentableArray<Task>>(args?: {
    where?: TaskWhereInput;
    orderBy?: TaskOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Todo {
  id: ID_Output;
  name: String;
}

export interface TodoPromise extends Promise<Todo>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  taskId: <T = TaskPromise>() => T;
  createdBy: <T = UserPromise>() => T;
}

export interface TodoSubscription
  extends Promise<AsyncIterator<Todo>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  taskId: <T = TaskSubscription>() => T;
  createdBy: <T = UserSubscription>() => T;
}

export interface TodoNullablePromise
  extends Promise<Todo | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  taskId: <T = TaskPromise>() => T;
  createdBy: <T = UserPromise>() => T;
}

export interface TaskConnection {
  pageInfo: PageInfo;
  edges: TaskEdge[];
}

export interface TaskConnectionPromise
  extends Promise<TaskConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TaskEdge>>() => T;
  aggregate: <T = AggregateTaskPromise>() => T;
}

export interface TaskConnectionSubscription
  extends Promise<AsyncIterator<TaskConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TaskEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTaskSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TaskEdge {
  node: Task;
  cursor: String;
}

export interface TaskEdgePromise extends Promise<TaskEdge>, Fragmentable {
  node: <T = TaskPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TaskEdgeSubscription
  extends Promise<AsyncIterator<TaskEdge>>,
    Fragmentable {
  node: <T = TaskSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTask {
  count: Int;
}

export interface AggregateTaskPromise
  extends Promise<AggregateTask>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTaskSubscription
  extends Promise<AsyncIterator<AggregateTask>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TodoConnection {
  pageInfo: PageInfo;
  edges: TodoEdge[];
}

export interface TodoConnectionPromise
  extends Promise<TodoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TodoEdge>>() => T;
  aggregate: <T = AggregateTodoPromise>() => T;
}

export interface TodoConnectionSubscription
  extends Promise<AsyncIterator<TodoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TodoEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTodoSubscription>() => T;
}

export interface TodoEdge {
  node: Todo;
  cursor: String;
}

export interface TodoEdgePromise extends Promise<TodoEdge>, Fragmentable {
  node: <T = TodoPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TodoEdgeSubscription
  extends Promise<AsyncIterator<TodoEdge>>,
    Fragmentable {
  node: <T = TodoSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTodo {
  count: Int;
}

export interface AggregateTodoPromise
  extends Promise<AggregateTodo>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTodoSubscription
  extends Promise<AsyncIterator<AggregateTodo>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TaskSubscriptionPayload {
  mutation: MutationType;
  node: Task;
  updatedFields: String[];
  previousValues: TaskPreviousValues;
}

export interface TaskSubscriptionPayloadPromise
  extends Promise<TaskSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TaskPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TaskPreviousValuesPromise>() => T;
}

export interface TaskSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TaskSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TaskSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TaskPreviousValuesSubscription>() => T;
}

export interface TaskPreviousValues {
  id: ID_Output;
  name: String;
  createdAt: DateTimeOutput;
  description: String;
}

export interface TaskPreviousValuesPromise
  extends Promise<TaskPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
}

export interface TaskPreviousValuesSubscription
  extends Promise<AsyncIterator<TaskPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface TodoSubscriptionPayload {
  mutation: MutationType;
  node: Todo;
  updatedFields: String[];
  previousValues: TodoPreviousValues;
}

export interface TodoSubscriptionPayloadPromise
  extends Promise<TodoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TodoPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TodoPreviousValuesPromise>() => T;
}

export interface TodoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TodoSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TodoPreviousValuesSubscription>() => T;
}

export interface TodoPreviousValues {
  id: ID_Output;
  name: String;
}

export interface TodoPreviousValuesPromise
  extends Promise<TodoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface TodoPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Task",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Todo",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
