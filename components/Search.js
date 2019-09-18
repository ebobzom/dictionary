import React from 'react';
import { FaSearch } from 'react-icons/fa'

function Search(){
    return (
        <form>
            <input 
            className="form-search" 
            type="text"
            placeholder="------Search Word------"
            >
            </input>
            <button>
                <FaSearch />
            </button>
        </form>
    );
}

export default Search;