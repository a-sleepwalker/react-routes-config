import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {RouteConfig} from '../index';

function normalizePath(path: string, parentPath?: string) {
  const replacedPath = path === '/' ? path : path.replace(/\/$/, '');
  if (replacedPath[0] === '/') return replacedPath;
  if (!parentPath) return replacedPath;
  return `${parentPath}/${replacedPath}`.replace(/\/\//g, '/');
}

function renderRoutes(routeConfig: RouteConfig[]) {
  if (!routeConfig || !routeConfig.length) return null;
  const global404 = routeConfig.find((route) => route.path === '*');
  global404 && routeConfig.splice(routeConfig.indexOf(global404), 1);
  return (function recursion(routes, extraProps: { parentPath?: string } = {}, switchProps = {}) {
    const redirectRoutes: RouteConfig[] = [];
    const normalRoutes: RouteConfig[] = [];
    routes.forEach((route) => {
      route.redirect
        ? redirectRoutes.push(route)
        : normalRoutes.push(route);
    });
    return (
      <Switch {...switchProps}>
        {[...normalRoutes, ...redirectRoutes].map((route) => {
          const routePath = normalizePath(route.path, extraProps.parentPath);
          const reactRouteProps = {...route};
          ['children', 'render', 'component'].forEach((key) => {
            Reflect.deleteProperty(reactRouteProps, key);
          });
          if (route.redirect) {
            return (
              <Redirect
                key={routePath}
                from={routePath}
                to={route.redirect}
                exact={route.exact}
              />
            );
          }
          return (
            <Route
              {...reactRouteProps}
              key={routePath}
              path={routePath}
              render={(props) => {
                const childRoutes = route.children
                  ? recursion(
                    route.children,
                    {parentPath: routePath},
                    {location: props?.location},
                  )
                  : null;
                if (route.component) {
                  return (
                    <route.component {...props} {...extraProps}>
                      {childRoutes}
                    </route.component>
                  );
                }
                return childRoutes;
              }}
            />
          );
        })}
        {global404?.component && <Route path="*" component={global404.component}/>}
      </Switch>
    );
  }(routeConfig));
}

const Routes: FC<{ routes: RouteConfig[] }> = ({routes}) => renderRoutes(routes);

Routes.displayName = '(render-by-config)Routes';

export default Routes;
