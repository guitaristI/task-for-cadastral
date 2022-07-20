import React, {useState} from 'react';
import {getCadastItems} from "../redux/cadastReducer";
import {useDispatch} from "react-redux";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    function searchHandler() {
        searchTerm.length < 5 ? alert('Enter valid number please!') : dispatch(getCadastItems(searchTerm))
    }

    return (
        <div className='search'>
            <input className='search__input' type="text" id='text' placeholder={'Enter cadastral number...'}
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value.replace(/[^0-9\:]/g,''))}/>
            <div className="search__btn">
                <button type="button" className="btn btn-primary" onClick={() => searchHandler()}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;