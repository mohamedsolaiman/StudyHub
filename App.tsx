
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ExplorePage from './components/pages/ExplorePage';
import CourseDetailPage from './components/pages/CourseDetailPage';
import LearnPage from './components/pages/LearnPage';
import DashboardPage from './components/pages/DashboardPage';
import CreateCoursePage from './components/pages/CreateCoursePage';
import LeaderboardPage from './components/pages/LeaderboardPage';
import ProfilePage from './components/pages/ProfilePage';
import SettingsPage from './components/pages/SettingsPage';
import MyLearningPage from './components/pages/MyLearningPage';

const { HashRouter, Routes, Route } = window.ReactRouterDOM;

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
            <Route path="/learn/:courseId/lesson/:lessonId" element={<LearnPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/create" element={<CreateCoursePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/my-learning" element={<MyLearningPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
