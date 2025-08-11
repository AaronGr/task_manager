export type TaskStatus = 'todo' | 'in-progress' | 'done';

export type Task = {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  due_date?: string;
  created_at: string;
}