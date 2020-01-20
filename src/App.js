import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Show from "./containers/Show/Show";
import Layout from "./components/Layout/Layout";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => (
    <Layout>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SearchBar}/>
                <Route path='/shows/:id' exact component={Show}/>
                <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </BrowserRouter>
    </Layout>
);

export default App;