import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

import App from './App';

import './index.scss';

const store = configureStore({
	/*initial reducer*/
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
      		<>
				<Switch>
					<Route exact path="/" component={props => <App match={props.match} />} />
					<Route component={props => (<div>404</div>)} />
				</Switch>
      		</>
    	</ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);