
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Sidebar } from '../Sidebar';
import { mockCurrentUser, mockEnrollments } from '../../lib/mockData';
import Button from '../ui/Button';

const { Link } = window.ReactRouterDOM;
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = window.Recharts;

const learningActivityData = [
  { name: 'Mon', hours: 2 },
  { name: 'Tue', hours: 3 },
  { name: 'Wed', hours: 1.5 },
  { name: 'Thu', hours: 4 },
  { name: 'Fri', hours: 2.5 },
  { name: 'Sat', hours: 5 },
  { name: 'Sun', hours: 1 },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="lg:w-1/5">
        <Sidebar />
      </aside>
      <div className="flex-1 lg:max-w-4xl">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, {mockCurrentUser.name}!</h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">XP Points</CardTitle>
                <span className="text-2xl">🏆</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockCurrentUser.xp.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+200 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                 <span className="text-2xl">🎓</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockCurrentUser.coursesCompleted}</div>
                 <p className="text-xs text-muted-foreground">+1 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                 <span className="text-2xl">🔥</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12 days</div>
                 <p className="text-xs text-muted-foreground">Keep it up!</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Learning Activity</CardTitle>
              <CardDescription>Your study hours this week.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={learningActivityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="hours" fill="hsl(222.2 47.4% 11.2%)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
          </Card>
          
          <Card>
             <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>Pick up where you left off.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockEnrollments.map(enrollment => (
                  <div key={enrollment.course.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src={enrollment.course.thumbnailUrl} alt={enrollment.course.title} className="w-24 h-16 object-cover rounded-md" />
                        <div>
                            <h4 className="font-semibold">{enrollment.course.title}</h4>
                            <p className="text-sm text-muted-foreground">{enrollment.course.author.name}</p>
                            <div className="w-full bg-secondary rounded-full h-2.5 mt-2">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${enrollment.progress}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/learn/${enrollment.course.id}/lesson/l1`}>
                        <Button variant="outline" size="sm">Continue</Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
