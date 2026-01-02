import { SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem, SidebarGroup, SidebarMenu } from '@/components/shadcn';
import { LayoutDashboard, Newspaper, Users, Warehouse } from 'lucide-react';
import type { IHasIcon, IHasName, IHasUrl } from '@/interfaces';
import { Link } from 'react-router-dom';
import { useLocation } from '@/hooks';
import { ROUTES } from '@/constants';
import { cn } from '@/functions';

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

export const AppSidebarModules = () => {

  const { isRoute } = useLocation();

  return (
    <>
      <SidebarGroup
        className={cn(
          '-mb-1',
          'group-data-[collapsible=icon]:-mb-3'
        )}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={'Tableau de bord'}
              asChild>
              <Link
                className={cn(isRoute(ROUTES.dashboard) && 'font-semibold')}
                to={ROUTES.dashboard}>
                <LayoutDashboard className={cn(
                  'opacity-60',
                  'group-data-[collapsible=icon]:opacity-100'
                )} />
                <span>
                  Tableau de bord
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
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
                      <Link
                        className={cn(isRoute(item.url) && 'font-semibold')}
                        to={item.url}>
                        <item.icon className={cn(
                          'opacity-60',
                          'group-data-[collapsible=icon]:opacity-100'
                        )} />
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
    </>
  );

};
