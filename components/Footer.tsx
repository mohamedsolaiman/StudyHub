
import React from 'react';
import { BookOpen } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <BookOpen className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by world-class senior frontend React engineers.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} StudyHub, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
