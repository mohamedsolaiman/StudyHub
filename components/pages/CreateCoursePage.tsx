import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import Badge from '../ui/Badge';
import { Sparkles, PlayCircle, FileText, Puzzle, Code, ChevronRight } from '../icons';
import { generateCourseOutline } from '../../lib/gemini';
import { Module, Lesson } from '../../types';

const LessonIcon = ({ type }: { type: Lesson['type'] }) => {
  const Icon = {
    video: PlayCircle,
    text: FileText,
    quiz: Puzzle,
    code: Code,
  }[type];
  if (!Icon) return null;
  return <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />;
};

const CreateCoursePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedOutline, setGeneratedOutline] = useState<Module[] | null>(null);

  const handleGenerateOutline = async () => {
    if (!title.trim()) {
      setError('Please enter a course title first.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedOutline(null);

    try {
      const outline = await generateCourseOutline(title);
      setGeneratedOutline(outline);
    } catch (e: any) {
      setError(e.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create a New Course</CardTitle>
          <CardDescription>
            Start by entering a course title. Then, use our AI assistant to generate a structured course outline in seconds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium">Course Title</label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <Input
                id="title"
                placeholder="e.g., The Ultimate Guide to Photography"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isLoading}
                aria-describedby="title-error"
                className="flex-grow"
              />
              <Button type="button" onClick={handleGenerateOutline} disabled={isLoading || !title.trim()} className="whitespace-nowrap w-full sm:w-auto">
                <Sparkles className="w-4 h-4 mr-2" />
                {isLoading ? 'Generating...' : 'Generate Outline'}
              </Button>
            </div>
            {error && <p id="title-error" className="text-sm text-destructive mt-2">{error}</p>}
          </div>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center p-8 rounded-lg bg-secondary">
          <p className="text-muted-foreground animate-pulse">Generating course outline with AI... please wait.</p>
        </div>
      )}

      {generatedOutline && (
        <Card>
          <CardHeader>
            <CardTitle>Suggested Course Outline</CardTitle>
            <CardDescription>
              Here is a starting point for your course. You can now proceed to add content to each lesson.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {generatedOutline.map((module, moduleIndex) => (
                <details key={module.id} open={moduleIndex === 0} className="group border rounded-lg overflow-hidden">
                  <summary className="flex items-center justify-between font-semibold p-4 bg-secondary/50 hover:bg-secondary cursor-pointer list-none">
                    <span>{module.title}</span>
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <ul className="p-4 space-y-3">
                    {module.lessons.map(lesson => (
                      <li key={lesson.id} className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0">
                        <div className="flex items-start space-x-3">
                          <LessonIcon type={lesson.type} />
                          <span className="text-sm font-medium">{lesson.title}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{lesson.duration} min</Badge>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
             <div className="border-t pt-4 mt-6 text-right">
                <Button>Save Outline & Continue</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CreateCoursePage;
