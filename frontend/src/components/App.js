import React from "react";
import ReactDOM from "react-dom";

import CategoryList from './Pages/CategoryList'
import AppLoader from "./Pages/AppLoader";
import CategoryDetail from "./Pages/CategoryDetail";

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// STORE NEEDS
import store from '../store';
import { Provider } from 'react-redux';

// REDUX PERSIST STORE NEEDS
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        const persistor = persistStore(store);
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <React.Fragment>
                        <Router>
                            <Route render={({ location, history }) => (
                                <React.Fragment>
                                    <main>
                                        <Route exact path="/" component={AppLoader} />
                                        <Route exact path="/home" component={CategoryList} />
                                        <Route exact path="/category/detail&id=:id" component={CategoryDetail} />
                                    </main>
                                </React.Fragment>
                            )}
                            />
                        </Router>
                    </React.Fragment>
                </PersistGate>
            </Provider>

        )
    }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;