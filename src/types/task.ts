export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  userId: string;
  date: string;
  createdAt: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}
