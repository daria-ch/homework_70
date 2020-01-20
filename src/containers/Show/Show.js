import React, {useState, useEffect, Fragment} from 'react';
import './Show.css';
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";


const Show = props => {
    const initialState = {
        image: '',
        title: '',
        info: ''
    };

    const [show, setShow] = useState(initialState);

    const getShowInfo = async (id) => {
        const response = await axios.get('http://api.tvmaze.com/shows/' + id);
        setShow(prevState => ({
            ...prevState,
            image: response.data.image.original,
            title: response.data.name,
            info: response.data.summary
        }))
    };

    useEffect(() => {
        getShowInfo(props.match.params.id);
    }, [props.match.params.id]);


    return (
        <Fragment>
            <SearchBar/>
            <div className='container'>
                <div className='ShowInfo'>
                    <img src={show.image} alt="Show Poster"/>
                    <div className='info'>
                        <h2>{show.title}</h2>
                        <p>{show.info}</p>
                    </div>
                </div>
            </div>
        </Fragment>

    );
};

export default Show;