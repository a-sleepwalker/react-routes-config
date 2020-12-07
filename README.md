# react-routes-config

react 配置式路由组件

## 安装

```sh
yarn install react-routes-config
```
输出文件为UMD，也可以直接用`script`标签引用，通过`window.ReactRoutesConfig`访问

## 使用

如果是CRA创建的模板，可以像如下方式改造App组件

```typescript typescript jsx
import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from 'react-routes-config';
import routesConfig from './routesConfig'; // 你的路由配置文件，类型为RouteConfig[]

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes routes={routesConfig}/>
    </BrowserRouter>
  );
};
```
```typescript
export interface RouteConfig extends RouteProps {
  path: string; // 匹配路径，以‘/’开头则认为是绝对路径，否则会自动从上层叠加，参考vue-router
  name?: string; // 路由名称
  redirect?: string; // 重定向路径
  meta?: { [key: string]: string }; //路由元信息，可以自定义
  children?: RouteConfig[];
}
```
## 配置

```typescript jsx
// 导出时可不关心路由顺序，匹配时自动按一般路由（Route），重定向（Redirect），global404排序。
export default [
  {
    path: '*',  // 建议最外层设置一个全局404组件
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
] as RouteConfig[]
```

## 目录

```
├── config														
│   ├── webpack.config.js
│   └── webpack.example.config.js			
├── dist									// 输出文件
│   └── index.js
├── example								// 例子
│   ├── App.tsx
│   ├── index.pug
│   ├── index.tsx
│   └── routesConfig.tsx
├── scripts
│   └── release.js
├── src									  // 源码
│   └── Routes.tsx
├── README.md
├── index.d.ts
├── package.json
├── tsconfig.json
└── yarn.lock
```



> 本项目受https://www.npmjs.com/package/react-router-config启发

