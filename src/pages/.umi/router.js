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
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
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
        "path": "/subject/components/Detail",
        "exact": true,
        "component": require('../subject/components/Detail.js').default
      },
      {
        "path": "/subject/models/subject",
        "exact": true,
        "component": require('../subject/models/subject.js').default
      },
      {
        "path": "/subject/services/subject",
        "exact": true,
        "component": require('../subject/services/subject.js').default
      },
      {
        "path": "/subject/:id",
        "exact": true,
        "component": require('../subject/$id.js').default
      },
      {
        "component": () => React.createElement(require('/Users/zchuhui/.config/yarn/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layouts/index.js","routes":[{"path":"/404","exact":true,"component":"./src/pages/404.js"},{"path":"/","exact":true,"component":"./src/pages/index/page.js"},{"path":"/search","exact":true,"component":"./src/pages/search/page.js"},{"path":"/subject/components/Detail","exact":true,"component":"./src/pages/subject/components/Detail.js"},{"path":"/subject/models/subject","exact":true,"component":"./src/pages/subject/models/subject.js"},{"path":"/subject/services/subject","exact":true,"component":"./src/pages/subject/services/subject.js"},{"path":"/subject/:id","exact":true,"component":"./src/pages/subject/$id.js"}]}]' })
      }
    ]
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
