
import React from 'react';
import { mockCourses, mockCurrentUser } from '../../lib/mockData';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Star, Clock, Users, BarChart3, PlayCircle, FileText, Puzzle, Code, ChevronLeft } from '../icons';
import { Lesson } from '../../types';

const { useParams, Link } = window.ReactRouterDOM;

const LessonIcon = ({ type }: { type: Lesson['type'] }) => {
  switch (type) {
    case 'video': return <PlayCircle className="w-5 h-5 text-muted-foreground" />;
    case 'text': return <FileText className="w-5 h-5 text-muted-foreground" />;
    case 'quiz': return <Puzzle className="w-5 h-5 text-muted-foreground" />;
    case 'code': return <Code className="w-5 h-5 text-muted-foreground" />;
    default: return null;
  }
};

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams();
  const course = mockCourses.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  const firstLesson = course.modules[0]?.lessons[0];

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/explore" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Courses
      </Link>
      <header className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <Badge variant="secondary" className="mb-2">{course.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-2">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{course.description}</p>
          <div className="flex items-center space-x-4 text-sm mb-4">
              <div className="flex items-center">
                  <img src={course.author.avatarUrl} alt={course.author.name} className="w-8 h-8 rounded-full mr-2" />
                  <span>Created by <Link to={`/profile/${course.author.id}`} className="font-semibold hover:underline">{course.author.name}</Link></span>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 font-semibold"><Star className="w-4 h-4" />{course.rating}</div>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> {course.difficulty}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {course.duration} hours</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {course.enrollmentCount.toLocaleString()} enrolled</div>
          </div>
        </div>
        <div className="md:col-span-1">
          <Card>
            <img src={course.thumbnailUrl} alt={course.title} className="rounded-t-lg aspect-video w-full object-cover" />
            <CardContent className="p-4">
              <h2 className="text-2xl font-bold mb-4">Free</h2>
              {firstLesson ? (
                <Link to={`/learn/${course.id}/lesson/${firstLesson.id}`} className="w-full">
                  <Button className="w-full">Start Learning</Button>
                </Link>
              ) : (
                 <Button className="w-full">Enroll Now</Button>
              )}
            </CardContent>
          </Card>
        </div>
      </header>

      <Tabs defaultValue="curriculum">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader><CardTitle>About this course</CardTitle></CardHeader>
            <CardContent><p>{course.description}</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="curriculum">
           <div className="space-y-4">
            {course.modules.map(module => (
              <Card key={module.id}>
                <CardHeader><CardTitle>{module.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.lessons.map(lesson => (
                      <li key={lesson.id} className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center space-x-3">
                          <LessonIcon type={lesson.type} />
                          <span className="font-medium">{lesson.title}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{lesson.duration} min</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            </div>
        </TabsContent>
        <TabsContent value="reviews">
          <p className="text-muted-foreground">Reviews will be available here.</p>
        </TabsContent>
        <TabsContent value="discussion">
          <p className="text-muted-foreground">Course discussion will be available here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseDetailPage;
