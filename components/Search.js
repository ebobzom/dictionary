import React from 'react';
import { FaSearch } from 'react-icons/fa'

function Search(props){
    return (
        <form>
            <input 
            className="form-search" 
            type="text"
            placeholder="------Search Word------"
            value={props.word}
            onChange={props.setDef}
            >
            </input>
            <button onClick={(e) => props.searchWord(props.word,e)}>
                <FaSearch />
            </button>
        </form>
    );
}

export default Search;