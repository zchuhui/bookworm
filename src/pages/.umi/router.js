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
    "component": () => React.createElement(require('C:/Users/Administrator/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","exact":true,"component":"./src\\\\pages\\\\index\\\\page.js"}]' })
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
