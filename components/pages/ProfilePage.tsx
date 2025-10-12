
import React from 'react';
import { mockUsers, mockCourses } from '../../lib/mockData';
import CourseCard from '../CourseCard';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';

const { useParams } = window.ReactRouterDOM;

const ProfilePage: React.FC = () => {
  const { userId } = useParams();
  const user = mockUsers.find(u => u.id === userId);
  const userCourses = mockCourses.filter(c => c.author.id === userId);

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="space-y-8">
      <Card className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={user.avatarUrl} alt={user.name} className="w-32 h-32 rounded-full ring-4 ring-primary/10" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground mt-2">{user.bio}</p>
            <div className="flex justify-center md:justify-start items-center gap-6 mt-4 text-sm">
                <div><span className="font-bold">{user.coursesCreated}</span> Courses Created</div>
                <div><span className="font-bold">{user.coursesCompleted}</span> Courses Completed</div>
                <div><span className="font-bold">{user.xp.toLocaleString()}</span> XP</div>
            </div>
          </div>
          <div className="md:ml-auto">
            <Button>Follow</Button>
          </div>
        </div>
      </Card>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Courses by {user.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {userCourses.length === 0 && (
            <p className="text-muted-foreground mt-4">This user hasn't created any courses yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
