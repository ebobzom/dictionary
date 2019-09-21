import React from 'react';
import check from '../utils/errorAndLoadingCheck';

function getDefination(props){
    return (
        <div className="main">
            {check(props.resultArr,props.errorValue) ? <p>Loading</p> : null}
            {props.errorValue ? <p>This is not an <strong>English</strong> word.</p> : null}
            {props.resultArr && <div>
                {props.resultArr.map((w, index) => <li key={index}>{w}</li>)}
            </div>}
        </div>
    );
}

export default getDefination;

