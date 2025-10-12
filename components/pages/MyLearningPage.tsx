
import React from 'react';
import { Sidebar } from '../Sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { mockEnrollments } from '../../lib/mockData';
import Button from '../ui/Button';

const { Link } = window.ReactRouterDOM;

const MyLearningPage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="lg:w-1/5">
        <Sidebar />
      </aside>
      <div className="flex-1 lg:max-w-4xl">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Learning</h2>
            <p className="text-muted-foreground">Your enrolled courses and progress.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {mockEnrollments.map(({ course, progress }) => (
              <Card key={course.id} className="flex flex-col md:flex-row overflow-hidden">
                <img src={course.thumbnailUrl} alt={course.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                <div className="flex flex-col justify-between p-6 w-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">by {course.author.name}</p>
                    <div className="w-full bg-secondary rounded-full h-2.5 mb-2">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-sm text-right text-muted-foreground">{progress}% Complete</p>
                  </div>
                  <div className="mt-4">
                    <Link to={`/learn/${course.id}/lesson/l1`}>
                      <Button>Continue Learning</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {mockEnrollments.length === 0 && (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
                <h3 className="text-xl font-semibold">No Courses Yet</h3>
                <p className="text-muted-foreground mt-2">Start your learning journey by exploring our courses.</p>
                <Link to="/explore" className="mt-4 inline-block">
                    <Button>Explore Courses</Button>
                </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLearningPage;
