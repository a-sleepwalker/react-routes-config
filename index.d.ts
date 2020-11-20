import {RouteProps} from 'react-router-dom';
import {ComponentType} from 'react';

export interface RouteConfig extends RouteProps {
  path: string;
  name?: string;
  redirect?: string;
  meta?: { [key: string]: string };
  children?: RouteConfig[];
}

declare const Routes: ComponentType<{ routes: RouteConfig[] }>;
export default Routes;
