import React, { useState } from 'react';
import { useTasks } from '@/context/TaskContext';
import { useAuth } from '@/context/AuthContext';
import { Task } from '@/types/task';
import Header from '@/components/Header';
import TaskColumn from '@/components/TaskColumn';
import TaskModal from '@/components/TaskModal';
import StatsCard from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { Plus, ListTodo, Loader2, CheckCircle, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { tasks, getTasksByStatus } = useTasks();
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const todoTasks = getTasksByStatus('todo');
  const inProgressTasks = getTasksByStatus('in_progress');
  const doneTasks = getTasksByStatus('done');

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const completionRate = tasks.length > 0 
    ? Math.round((doneTasks.length / tasks.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-display font-bold">
              Welcome back, <span className="gradient-text">{user?.name || 'User'}</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's an overview of your tasks
            </p>
          </div>
          <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
            <Plus className="h-5 w-5 mr-2" />
            New Task
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="animate-slide-up stagger-1">
            <StatsCard
              title="Total Tasks"
              value={tasks.length}
              icon={ListTodo}
              color="primary"
            />
          </div>
          <div className="animate-slide-up stagger-2">
            <StatsCard
              title="In Progress"
              value={inProgressTasks.length}
              icon={Loader2}
              color="warning"
            />
          </div>
          <div className="animate-slide-up stagger-3">
            <StatsCard
              title="Completed"
              value={doneTasks.length}
              icon={CheckCircle}
              color="success"
            />
          </div>
          <div className="animate-slide-up stagger-4">
            <StatsCard
              title="Completion Rate"
              value={`${completionRate}%`}
              icon={TrendingUp}
              color="accent"
              trend={completionRate > 50 ? '↑ Great progress!' : undefined}
            />
          </div>
        </div>

        {/* Task Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <TaskColumn status="todo" tasks={todoTasks} onEditTask={handleEditTask} />
          <TaskColumn status="in_progress" tasks={inProgressTasks} onEditTask={handleEditTask} />
          <TaskColumn status="done" tasks={doneTasks} onEditTask={handleEditTask} />
        </div>
      </main>

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        task={editingTask}
      />
    </div>
  );
};

export default Dashboard;
