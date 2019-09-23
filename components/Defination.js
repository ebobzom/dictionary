import React from 'react';
import check from '../utils/errorAndLoadingCheck';
import Result from './Result';

function getDefination(props){
    return (
        <div className="main">
            {props.errorValue ? <p>This is not an <strong>English</strong> word.</p> : null}
            {props.resultArr && 
            <div>
                {props.resultArr.map((ans,index) => <Result key={index} heading={ans[0]} defArr={ans[1]} />)}
            </div>
            }
        </div>
    );
}

export default getDefination;

