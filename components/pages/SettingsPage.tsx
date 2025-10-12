
import React from 'react';
import { Sidebar } from '../Sidebar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { mockCurrentUser } from '../../lib/mockData';

const SettingsPage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="lg:w-1/5">
        <Sidebar />
      </aside>
      <div className="flex-1 lg:max-w-2xl space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input defaultValue={mockCurrentUser.name} />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" defaultValue="diana.prince@studyhub.com" disabled />
              </div>
               <div>
                <label className="text-sm font-medium">Bio</label>
                <textarea className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" rows={3} defaultValue={mockCurrentUser.bio}></textarea>
              </div>
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
