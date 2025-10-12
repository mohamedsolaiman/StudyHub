
import React, { useState } from 'react';
import { mockCourses } from '../../lib/mockData';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import { ChevronLeft, ChevronRight, PlayCircle, FileText, Puzzle, Code } from '../icons';
import { Lesson } from '../../types';

const { useParams, Link, useNavigate } = window.ReactRouterDOM;

const LessonIcon = ({ type }: { type: Lesson['type'] }) => {
  const Icon = {
    video: PlayCircle,
    text: FileText,
    quiz: Puzzle,
    code: Code,
  }[type];
  return <Icon className="w-4 h-4 mr-2 text-muted-foreground" />;
};

const LearnPage: React.FC = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const course = mockCourses.find(c => c.id === courseId);
  const currentModule = course?.modules.find(m => m.lessons.some(l => l.id === lessonId));
  const currentLesson = currentModule?.lessons.find(l => l.id === lessonId);

  if (!course || !currentLesson) {
    return <div>Content not found.</div>;
  }

  const allLessons: Lesson[] = course.modules.flatMap(m => m.lessons);
  const currentLessonIndex = allLessons.findIndex(l => l.id === lessonId);

  const handleNext = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentLessonIndex + 1];
      navigate(`/learn/${courseId}/lesson/${nextLesson.id}`);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      const prevLesson = allLessons[currentLessonIndex - 1];
      navigate(`/learn/${courseId}/lesson/${prevLesson.id}`);
    }
  };


  return (
    <div className="flex h-[calc(100vh-8rem)]">
      {/* Sidebar */}
      <aside className="w-80 border-r overflow-y-auto">
        <div className="p-4 border-b">
          <Link to={`/course/${course.id}`} className="font-bold hover:underline">{course.title}</Link>
        </div>
        <div className="p-2">
          {course.modules.map(module => (
            <div key={module.id} className="mb-4">
              <h3 className="font-semibold px-2 mb-2">{module.title}</h3>
              <ul>
                {module.lessons.map(lesson => (
                  <li key={lesson.id}>
                    <Link
                      to={`/learn/${courseId}/lesson/${lesson.id}`}
                      className={cn(
                        'flex items-center p-2 rounded-md text-sm',
                        lesson.id === lessonId ? 'bg-accent' : 'hover:bg-accent/50'
                      )}
                    >
                      <LessonIcon type={lesson.type} />
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          {currentLesson.type === 'video' && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={currentLesson.content}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {currentLesson.type === 'text' && (
            <div className="prose max-w-none">
              <p>This is where the text content for the lesson would go. It supports markdown.</p>
              <p>{currentLesson.content}</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t flex justify-between">
          <Button variant="outline" onClick={handlePrev} disabled={currentLessonIndex === 0}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button onClick={handleNext} disabled={currentLessonIndex === allLessons.length - 1}>
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LearnPage;
