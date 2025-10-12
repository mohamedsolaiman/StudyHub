
import React from 'react';
import { mockLeaderboard } from '../../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';

const { Link } = window.ReactRouterDOM;

const LeaderboardPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl">Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mockLeaderboard.map((entry) => (
              <li key={entry.rank} className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-bold w-8 text-center text-muted-foreground">
                    {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
                  </span>
                  <img src={entry.user.avatarUrl} alt={entry.user.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <Link to={`/profile/${entry.user.id}`} className="font-semibold hover:underline">
                      {entry.user.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{entry.user.bio}</p>
                  </div>
                </div>
                <Badge variant={entry.rank <= 3 ? 'default' : 'outline'}>{entry.xp.toLocaleString()} XP</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderboardPage;
