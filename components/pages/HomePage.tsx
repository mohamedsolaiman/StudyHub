
import React from 'react';
import CourseCard from '../CourseCard';
import { mockCourses } from '../../lib/mockData';
import Button from '../ui/Button';

const { Link } = window.ReactRouterDOM;

const HomePage: React.FC = () => {
  const trendingCourses = mockCourses.slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Learn, Create, and Collaborate
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          StudyHub is the ultimate platform for user-generated courses. Join a community of learners and creators today.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/explore">
            <Button size="lg">Start Learning</Button>
          </Link>
          <Link to="/create">
            <Button size="lg" variant="secondary">
              Become a Creator
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Trending Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
