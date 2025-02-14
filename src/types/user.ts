export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  profilePicture: FileList | null;
}

export enum userRoles {
  user = 'user',
  blogger = 'blogger',
}
