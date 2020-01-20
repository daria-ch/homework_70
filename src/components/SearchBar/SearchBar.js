import React, {Fragment, useState} from 'react';
import './SearchBar.css';
import axios from 'axios';
import List from "../List/List";

const SearchBar = () => {
    const [searchingData, setSearchingData] = useState({});
    const [shows, setShows] = useState([]);

    const searchMovie = async (value) => {
        const response = await axios.get('http://api.tvmaze.com/search/shows?q=' + value);

        let showList = [];
        response.data.forEach(show => {
            showList.push({name: show.show.name, key: show.show.id});
        });
        setShows(showList);
    };

    const searchingValue = async (value) => {
        await searchMovie(value);
        setSearchingData(value);
    };

    const searchingDone = () => {
        setShows([]);
    };

    return (
        <Fragment>
            <form className='SearchBar'>
                <label htmlFor="search">Search for TV Show:</label>
                <input type="text" name='search' id='search' className='searchInput' autoComplete="off"
                       placeholder="Enter show title"
                       onChange={(event) => searchingValue(event.target.value)}/>
            </form>
            {shows.length > 0 ?
                <ul className='list'>
                    {shows.map(show => (
                        <List key={show.key} title={show.name} id={show.key} close={searchingDone}/>
                    ))}
                </ul>
                : null
            }
        </Fragment>
    );
};

export default SearchBar;