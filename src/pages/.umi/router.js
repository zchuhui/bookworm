import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index/page.js').default
  },
  {
    "path": "/search",
    "exact": true,
    "component": require('../search/page.js').default
  },
  {
    "component": () => React.createElement(require('C:/Program Files/nodejs/node_modules/umi/node_modules/_umi-build-dev@0.19.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","exact":true,"component":"./src/pages/index/page.js"},{"path":"/search","exact":true,"component":"./src/pages/search/page.js"}]' })
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
