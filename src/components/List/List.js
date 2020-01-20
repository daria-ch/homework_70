import React from 'react';
import {NavLink} from 'react-router-dom';
import './List.css';

const List = props => {
    return (
        <NavLink to={'/shows/' + props.id} className='item' onClick={props.close}>{props.title}</NavLink>
    )
};

export default List;