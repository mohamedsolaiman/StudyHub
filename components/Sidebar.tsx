
import React from 'react';
import { cn } from '../lib/utils';
import { Home, Compass, ListVideo, Trophy, PlusCircle, User, Settings, LogOut } from './icons';

const { NavLink } = window.ReactRouterDOM;

const sidebarNavItems = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  { title: "My Learning", href: "/my-learning", icon: ListVideo },
  { title: "Explore", href: "/explore", icon: Compass },
  { title: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { title: "Create Course", href: "/create", icon: PlusCircle },
  { title: "Profile", href: "/profile/u4", icon: User }, // Hardcoded to current user
  { title: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)}>
      {sidebarNavItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
              isActive ? 'bg-accent' : 'bg-transparent',
              'justify-start'
            )
          }
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.title}
        </NavLink>
      ))}
      <a
          href="#"
          className='inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground justify-start'
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </a>
    </nav>
  );
}
