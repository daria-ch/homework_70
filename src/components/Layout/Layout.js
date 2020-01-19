import React, {Fragment} from 'react';
import './Layout.css';
import Toolbar from "../Toolbar/Toolbar";
import SearchBar from "../SearchBar/SearchBar";

const Layout = props => (
    <Fragment>
        <Toolbar/>
        <SearchBar/>
        <main className='Layout-Content'>
            {props.children}
        </main>
    </Fragment>
);

export default Layout;