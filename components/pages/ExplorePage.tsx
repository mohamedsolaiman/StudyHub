
import React, { useState } from 'react';
import CourseCard from '../CourseCard';
import { mockCourses } from '../../lib/mockData';
import Input from '../ui/Input';
import { Course } from '../../types';

const categories = [...new Set(mockCourses.map(c => c.category))];
const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

const ExplorePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  const toggleFilter = (filterList: string[], setFilterList: React.Dispatch<React.SetStateAction<string[]>>) => (item: string) => {
    setFilterList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };
  
  const filteredCourses = mockCourses.filter((course: Course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(course.category)) &&
      (selectedDifficulties.length === 0 || selectedDifficulties.includes(course.difficulty))
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-1/4 lg:w-1/5">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" onChange={() => toggleFilter(selectedCategories, setSelectedCategories)(category)} />
                  <span className="ml-2 text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Difficulty</h3>
            <div className="space-y-2">
              {difficulties.map(difficulty => (
                <label key={difficulty} className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" onChange={() => toggleFilter(selectedDifficulties, setSelectedDifficulties)(difficulty)} />
                  <span className="ml-2 text-sm">{difficulty}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <main className="w-full md:w-3/4 lg:w-4/5">
        <Input
          type="search"
          placeholder="Search for courses..."
          className="w-full mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No courses found. Try adjusting your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ExplorePage;
