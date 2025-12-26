import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task, TaskStatus } from '@/types/task';

// Mock data for demo purposes
const mockTasks: Task[] = [
  {
    _id: '1',
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the MERN stack project',
    status: 'in_progress',
    userId: '1',
    date: '2025-12-28',
    createdAt: '2025-12-20',
  },
  {
    _id: '2',
    title: 'Design system implementation',
    description: 'Create reusable UI components with consistent styling',
    status: 'done',
    userId: '1',
    date: '2025-12-25',
    createdAt: '2025-12-18',
  },
  {
    _id: '3',
    title: 'API integration',
    description: 'Connect frontend with Express.js backend endpoints',
    status: 'todo',
    userId: '1',
    date: '2025-12-30',
    createdAt: '2025-12-22',
  },
  {
    _id: '4',
    title: 'User authentication flow',
    description: 'Implement JWT-based login and registration',
    status: 'todo',
    userId: '1',
    date: '2025-12-31',
    createdAt: '2025-12-23',
  },
];

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, '_id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  getTasksByStatus: (status: TaskStatus) => Task[];
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const addTask = (taskData: Omit<Task, '_id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task._id === id ? { ...task, ...updates } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task._id !== id));
  };

  const getTasksByStatus = (status: TaskStatus) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, getTasksByStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
