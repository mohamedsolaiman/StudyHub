
import React from 'react';
import { BookOpen, Search, ChevronDown, Bell, PlusCircle, Menu, X } from './icons';
import Button from './ui/Button';
import { mockCurrentUser } from '../lib/mockData';

const { Link } = window.ReactRouterDOM;

const NavLink: React.FC<{ to: string; children: React.ReactNode; }> = ({ to, children }) => (
  <Link to={to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
    {children}
  </Link>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
                <BookOpen className="h-6 w-6" />
                <span className="font-bold">StudyHub</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <NavLink to="/explore">Explore</NavLink>
                <NavLink to="/my-learning">My Learning</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
            </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
                 <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input type="search" placeholder="Search courses..." className="w-full rounded-lg bg-secondary py-2 pl-8 pr-3 text-sm focus:outline-none md:w-64" />
                </div>
            </div>
            <nav className="hidden md:flex items-center space-x-2">
                <Link to="/create">
                    <Button variant="ghost" size="sm">
                        <PlusCircle className="h-5 w-5 mr-2" />
                        Create
                    </Button>
                </Link>
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <img src={mockCurrentUser.avatarUrl} alt={mockCurrentUser.name} className="h-8 w-8 rounded-full" />
                    <span className="text-sm font-medium">{mockCurrentUser.name}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
            </nav>
            <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                   {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden p-4 border-t">
            <nav className="flex flex-col space-y-4">
                 <NavLink to="/explore">Explore</NavLink>
                 <NavLink to="/my-learning">My Learning</NavLink>
                 <NavLink to="/leaderboard">Leaderboard</NavLink>
                 <NavLink to="/create">Create Course</NavLink>
                 <NavLink to={`/profile/${mockCurrentUser.id}`}>Profile</NavLink>
                 <NavLink to="/settings">Settings</NavLink>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
