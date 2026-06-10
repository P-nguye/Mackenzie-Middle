import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddCommentData {
  comment_insert: Comment_Key;
}

export interface AddCommentVariables {
  text: string;
  postId: UUIDString;
  authorId: UUIDString;
}

export interface Comment_Key {
  id: UUIDString;
  __typename?: 'Comment_Key';
}

export interface CreatePostData {
  post_insert: Post_Key;
}

export interface CreatePostVariables {
  title: string;
  content: string;
  imageUrl?: string | null;
  authorId: UUIDString;
  fandomId: UUIDString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  username: string;
  email: string;
  bio?: string | null;
  avatarUrl?: string | null;
}

export interface Fandom_Key {
  id: UUIDString;
  __typename?: 'Fandom_Key';
}

export interface ListPostsInFandomData {
  posts: ({
    title: string;
    content: string;
    author: {
      username: string;
    };
  })[];
}

export interface ListPostsInFandomVariables {
  fandomId: UUIDString;
}

export interface Membership_Key {
  userId: UUIDString;
  fandomId: UUIDString;
  __typename?: 'Membership_Key';
}

export interface Post_Key {
  id: UUIDString;
  __typename?: 'Post_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Vote_Key {
  userId: UUIDString;
  postId: UUIDString;
  __typename?: 'Vote_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreatePostRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePostVariables): MutationRef<CreatePostData, CreatePostVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePostVariables): MutationRef<CreatePostData, CreatePostVariables>;
  operationName: string;
}
export const createPostRef: CreatePostRef;

export function createPost(vars: CreatePostVariables): MutationPromise<CreatePostData, CreatePostVariables>;
export function createPost(dc: DataConnect, vars: CreatePostVariables): MutationPromise<CreatePostData, CreatePostVariables>;

interface ListPostsInFandomRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPostsInFandomVariables): QueryRef<ListPostsInFandomData, ListPostsInFandomVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListPostsInFandomVariables): QueryRef<ListPostsInFandomData, ListPostsInFandomVariables>;
  operationName: string;
}
export const listPostsInFandomRef: ListPostsInFandomRef;

export function listPostsInFandom(vars: ListPostsInFandomVariables, options?: ExecuteQueryOptions): QueryPromise<ListPostsInFandomData, ListPostsInFandomVariables>;
export function listPostsInFandom(dc: DataConnect, vars: ListPostsInFandomVariables, options?: ExecuteQueryOptions): QueryPromise<ListPostsInFandomData, ListPostsInFandomVariables>;

interface AddCommentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCommentVariables): MutationRef<AddCommentData, AddCommentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddCommentVariables): MutationRef<AddCommentData, AddCommentVariables>;
  operationName: string;
}
export const addCommentRef: AddCommentRef;

export function addComment(vars: AddCommentVariables): MutationPromise<AddCommentData, AddCommentVariables>;
export function addComment(dc: DataConnect, vars: AddCommentVariables): MutationPromise<AddCommentData, AddCommentVariables>;

