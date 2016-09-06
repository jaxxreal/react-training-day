import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
// import { Provider } from 'react-redux';
// import * as Cookies from 'js-cookie';
// import useScroll from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

// import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';

import { APP_ROOT } from './config';

import './../assets/styles/app.less';

import getSVG from './loadSVG';

getSVG();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing,
});

const routeConfig = [
    {
        path: APP_ROOT,
        component: require('./containers/AppWrapper'),
        indexRoute: require('./containers/MainPage'),
        childRoutes: [
            require('./containers/MainPage'),
            {
                onEnter: (nextState, replace) => {
                    // check nextState and make replace when you need it
                    console.log(nextState, replace);
                },
                component: ({ children }) => children, // when you need special wrapper
                childRoutes: [
                    // 404 should always be last
                    require('./components/NoFound'),
                ],
            },
        ],
    },
];

render(<Router history={history} routes={routeConfig}/>, document.getElementById('root'));
