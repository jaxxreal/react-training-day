import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

import { APP_ROOT } from './config';
import configureHttpService from './http/configure';

import './../assets/styles/app.less';

// import getSVG from './loadSVG';
//
// getSVG();

configureHttpService();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: state => state.routing,
});

const routeConfig = [
    {
        path: APP_ROOT,
        component: require('./containers/AppWrapper'),
        indexRoute: require('./containers/MainPage'),
        childRoutes: [
            require('./containers/MainPage'),
            require('./containers/Counter'),
            require('./containers/Users'),
        ],
    },
];

render((
    <Provider store={store}>
        <Router history={history} routes={routeConfig}/>
    </Provider>
), document.getElementById('root'));
