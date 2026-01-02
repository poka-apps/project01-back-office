import { SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem, SidebarGroup, SidebarMenu } from '@/components/shadcn';
import type { IHasIcon, IHasName, IHasUrl } from '@/interfaces';
import { Newspaper, Users, Warehouse } from 'lucide-react';
import { ROUTES } from '@/constants';

const CONSTS = {
  menus: [
    {
      name: 'Utilisateurs',
      url: ROUTES.users,
      icon: Users,
    },
    {
      name: 'Annonces',
      url: ROUTES.annonces,
      icon: Newspaper,
    },
    {
      name: 'Garages',
      url: ROUTES.garages,
      icon: Warehouse,
    }
  ] as (IHasName & IHasUrl & IHasIcon)[]
};

export const AppSidebarModules = () => (
  <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
    <SidebarGroupLabel>
      Modules
    </SidebarGroupLabel>
    <SidebarMenu>
      {
        CONSTS
          .menus
          .map(
            item => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>
                      {item.name}
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )
      }
    </SidebarMenu>
  </SidebarGroup>
);
