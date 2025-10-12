
import React from 'react';
import { Course } from '../types';
import { Card, CardContent } from './ui/Card';
import Badge from './ui/Badge';
import { Star, Clock, Users, BarChart3 } from './icons';

const { Link } = window.ReactRouterDOM;

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="block group">
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="aspect-[16/9] overflow-hidden">
                <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <CardContent className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                    <div className="flex items-center gap-1 text-sm font-semibold text-yellow-500">
                        <Star className="w-4 h-4" />
                        <span>{course.rating}</span>
                    </div>
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-2 flex-grow group-hover:text-primary transition-colors">{course.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <img src={course.author.avatarUrl} alt={course.author.name} className="w-6 h-6 rounded-full mr-2" />
                    <span>{course.author.name}</span>
                </div>
                <div className="border-t pt-3 mt-auto text-xs text-muted-foreground flex justify-between items-center">
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration} hours</div>
                    <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {course.enrollmentCount.toLocaleString()}</div>
                    <div className="flex items-center gap-1.5"><BarChart3 className="w-3.5 h-3.5" /> {course.difficulty}</div>
                </div>
            </CardContent>
        </Card>
    </Link>
  );
};

export default CourseCard;
