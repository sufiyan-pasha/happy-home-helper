import React from 'react';
import { Task, TaskStatus } from '@/types/task';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Edit, Trash2, CheckCircle, Circle, Loader2 } from 'lucide-react';
import { useTasks } from '@/context/TaskContext';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const statusConfig: Record<TaskStatus, { label: string; color: string; icon: React.ReactNode }> = {
  todo: {
    label: 'To Do',
    color: 'bg-muted text-muted-foreground',
    icon: <Circle className="h-3 w-3" />,
  },
  in_progress: {
    label: 'In Progress',
    color: 'bg-warning/20 text-warning',
    icon: <Loader2 className="h-3 w-3 animate-spin" />,
  },
  done: {
    label: 'Completed',
    color: 'bg-success/20 text-success',
    icon: <CheckCircle className="h-3 w-3" />,
  },
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit }) => {
  const { deleteTask, updateTask } = useTasks();
  const config = statusConfig[task.status];

  const handleStatusChange = () => {
    const nextStatus: Record<TaskStatus, TaskStatus> = {
      todo: 'in_progress',
      in_progress: 'done',
      done: 'todo',
    };
    updateTask(task._id, { status: nextStatus[task.status] });
  };

  return (
    <Card className="card-hover glass animate-scale-in group">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold font-display line-clamp-2">
            {task.title}
          </CardTitle>
          <Badge
            className={`${config.color} flex items-center gap-1 cursor-pointer transition-all hover:scale-105`}
            onClick={handleStatusChange}
          >
            {config.icon}
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {task.description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{task.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{task.createdAt}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(task)}
            className="flex-1"
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => deleteTask(task._id)}
            className="flex-1 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
