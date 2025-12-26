import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: string;
  color: 'primary' | 'accent' | 'warning' | 'success';
}

const colorClasses = {
  primary: 'from-primary/20 to-primary/5 text-primary',
  accent: 'from-accent/20 to-accent/5 text-accent',
  warning: 'from-warning/20 to-warning/5 text-warning',
  success: 'from-success/20 to-success/5 text-success',
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, trend, color }) => {
  return (
    <Card className="card-hover glass overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-3xl font-display font-bold">{value}</p>
            {trend && (
              <p className="text-xs text-success">{trend}</p>
            )}
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
