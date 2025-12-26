import React from 'react';
import { Task, TaskStatus } from '@/types/task';
import TaskCard from './TaskCard';
import { Circle, Loader2, CheckCircle } from 'lucide-react';

interface TaskColumnProps {
  status: TaskStatus;
  tasks: Task[];
  onEditTask: (task: Task) => void;
}

const columnConfig: Record<TaskStatus, { title: string; icon: React.ReactNode; gradient: string }> = {
  todo: {
    title: 'To Do',
    icon: <Circle className="h-5 w-5" />,
    gradient: 'from-muted/50 to-muted/20',
  },
  in_progress: {
    title: 'In Progress',
    icon: <Loader2 className="h-5 w-5 animate-spin" />,
    gradient: 'from-warning/20 to-warning/5',
  },
  done: {
    title: 'Completed',
    icon: <CheckCircle className="h-5 w-5" />,
    gradient: 'from-success/20 to-success/5',
  },
};

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks, onEditTask }) => {
  const config = columnConfig[status];

  return (
    <div className="flex flex-col h-full">
      <div className={`flex items-center gap-3 p-4 rounded-t-xl bg-gradient-to-r ${config.gradient}`}>
        <div className="text-foreground/70">{config.icon}</div>
        <h3 className="font-display font-semibold text-foreground">{config.title}</h3>
        <span className="ml-auto bg-background/50 px-2 py-0.5 rounded-full text-sm font-medium">
          {tasks.length}
        </span>
      </div>
      
      <div className="flex-1 p-3 space-y-3 bg-muted/30 rounded-b-xl min-h-[300px]">
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
            No tasks yet
          </div>
        ) : (
          tasks.map((task, index) => (
            <div
              key={task._id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <TaskCard task={task} onEdit={onEditTask} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
