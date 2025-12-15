'use client';

import { SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, Sidebar } from '@/components/shadcn';
import { AppSidebarTeamSwitcher } from '../AppSidebarTeamSwitcher';
import { AppSidebarProjects } from '../AppSidebarProjects';
import { AppSidebarUser } from '../AppSidebarUser';
import { AppSidebarMain } from './AppSidebarMain';
import * as React from 'react';
import {
  GalleryVerticalEnd,
  SquareTerminal,
  AudioWaveform,
  Settings2,
  PieChart,
  BookOpen,
  Command,
  Frame,
  Map,
  Bot,
} from 'lucide-react';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible='icon' {...props}>
    <SidebarHeader>
      <AppSidebarTeamSwitcher teams={data.teams} />
    </SidebarHeader>
    <SidebarContent>
      <AppSidebarMain items={data.navMain} />
      <AppSidebarProjects projects={data.projects} />
    </SidebarContent>
    <SidebarFooter>
      <AppSidebarUser user={data.user} />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);
