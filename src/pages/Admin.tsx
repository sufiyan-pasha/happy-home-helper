import React from 'react';
import { useTasks } from '@/context/TaskContext';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Users, ListTodo, TrendingUp, Shield } from 'lucide-react';
import StatsCard from '@/components/StatsCard';

// Mock users for demo
const mockUsers = [
  { _id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', tasksCount: 12 },
  { _id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user', tasksCount: 8 },
  { _id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'user', tasksCount: 5 },
  { _id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'user', tasksCount: 15 },
];

const Admin: React.FC = () => {
  const { tasks } = useTasks();

  const totalUsers = mockUsers.length;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === 'done').length;
  const activeUsers = mockUsers.filter((u) => u.tasksCount > 0).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Admin Header */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">Manage users and monitor system activity</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="animate-slide-up stagger-1">
            <StatsCard
              title="Total Users"
              value={totalUsers}
              icon={Users}
              color="primary"
            />
          </div>
          <div className="animate-slide-up stagger-2">
            <StatsCard
              title="Total Tasks"
              value={totalTasks}
              icon={ListTodo}
              color="accent"
            />
          </div>
          <div className="animate-slide-up stagger-3">
            <StatsCard
              title="Completed Tasks"
              value={completedTasks}
              icon={TrendingUp}
              color="success"
            />
          </div>
          <div className="animate-slide-up stagger-4">
            <StatsCard
              title="Active Users"
              value={activeUsers}
              icon={Users}
              color="warning"
            />
          </div>
        </div>

        {/* Users Table */}
        <Card className="glass animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2">
              <Users className="h-5 w-5" />
              All Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Tasks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.role === 'admin' ? 'default' : 'secondary'}
                        className={user.role === 'admin' ? 'bg-primary' : ''}
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{user.tasksCount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
