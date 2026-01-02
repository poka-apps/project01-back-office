import { SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem, SidebarGroup, SidebarMenu } from '@/components/shadcn';
import type { IHasIcon, IHasName, IHasUrl } from '@/interfaces';
import { Newspaper, Users, Warehouse } from 'lucide-react';
import { ROUTES } from '@/constants';
import { Link } from 'react-router-dom';

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
  <SidebarGroup>
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
                <SidebarMenuButton
                  tooltip={item.name}
                  asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>
                      {item.name}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )
      }
    </SidebarMenu>
  </SidebarGroup>
);
