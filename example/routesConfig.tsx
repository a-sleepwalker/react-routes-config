import React from 'react';
import {RouteConfig} from '../index';

export default [
  {
    path: '*',
    component: () => '404',
  },
  {
    path: '/dashboard',
    component: ({children}: any) => (<div><p>app</p>{children}</div>),
    children: [
      {
        path: '',
        component: ({children}: any) => (<div><p>home</p>{children}</div>),
        children: [
          {
            path: 'sub-page-1',
            component: () => (<span>sub-page-1</span>),
          },
          {
            path: 'sub-page-2',
            component: () => (<span>sub-page-2</span>),
          },
          {
            path: '/dashboard/outer-link',
            component: () => (<span>outer-link</span>),
          },
        ],
      },
    ],
  },
  {
    path: '/page',
    component: ({children}: any) => (<div><p>page</p>{children}</div>),
    children: [
      {
        path: '/view-one',
        component: () => (<span>view-one</span>),
      },
      {
        path: '/another-redirect',
        redirect: '/home/sub-page-2',
      },
    ],
  },
  {path: '/', redirect: '/dashboard', exact: true},
  {path: '/red', redirect: '/page', exact: true},
] as RouteConfig[];
