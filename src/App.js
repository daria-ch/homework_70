import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Search from "./containers/Search/Search";
import Show from "./containers/Show/Show";
import Layout from "./components/Layout/Layout";

const App = () => (
    <Layout>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Search}/>
                <Route path='/shows/:id' exact component={Show}/>
            </Switch>
        </BrowserRouter>
    </Layout>
);

export default App;