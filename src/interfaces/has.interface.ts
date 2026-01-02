import type { LucideIcon } from 'lucide-react';

export interface IHasOptOpen {
  open?: boolean;
}

export interface IHasOpen {
  open: boolean;
}

export interface IHasOptName<T = string> {
  name?: T;
}

export interface IHasName<T = string> {
  name: T;
}

export interface IHasOptUrl<T = string> {
  url?: T;
}

export interface IHasUrl<T = string> {
  url: T;
}

export interface IHasOptIcon<T = LucideIcon> {
  icon?: T;
}

export interface IHasIcon<T = LucideIcon> {
  icon: T;
}
