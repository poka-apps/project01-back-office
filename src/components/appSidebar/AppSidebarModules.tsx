'use client';

import { Folder, Forward, MoreHorizontal, Trash2, type LucideIcon, } from 'lucide-react';
import { useSidebar } from '@/hooks';
import {
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  SidebarGroupLabel,
  SidebarMenuAction,
  SidebarMenuButton,
  DropdownMenuItem,
  SidebarMenuItem,
  SidebarGroup,
  DropdownMenu,
  SidebarMenu
} from '@/components/shadcn';

type TProps = {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
};

export const AppSidebarModules = ({ projects }: TProps) => {

  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
      <SidebarGroupLabel>
        Modules
      </SidebarGroupLabel>
      <SidebarMenu>
        {
          projects
            .map(
              item => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction showOnHover>
                        <MoreHorizontal />
                        <span className='sr-only'>More</span>
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className='w-48 rounded-lg'
                      side={isMobile ? 'bottom' : 'right'}
                      align={isMobile ? 'end' : 'start'}>
                      <DropdownMenuItem>
                        <Folder className='text-muted-foreground' />
                        <span>View Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Forward className='text-muted-foreground' />
                        <span>Share Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Trash2 className='text-muted-foreground' />
                        <span>Delete Project</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              )
            )
        }
        <SidebarMenuItem>
          <SidebarMenuButton className='text-sidebar-foreground/70'>
            <MoreHorizontal className='text-sidebar-foreground/70' />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );

};
