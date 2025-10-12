
import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';

const CreateCoursePage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Course</CardTitle>
          <CardDescription>Fill in the details below to start building your course.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">Course Title</label>
              <Input id="title" placeholder="e.g., Introduction to React" />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">Course Description</label>
              <textarea 
                id="description" 
                rows={4} 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Describe what your course is about..."
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                  <Input id="category" placeholder="e.g., Web Development" />
                </div>
                <div>
                    <label htmlFor="difficulty" className="block text-sm font-medium mb-1">Difficulty</label>
                    <select id="difficulty" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div>
            </div>

             <div>
              <label htmlFor="thumbnail" className="block text-sm font-medium mb-1">Thumbnail Image</label>
              <Input id="thumbnail" type="file" />
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full">Create Course</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCoursePage;
