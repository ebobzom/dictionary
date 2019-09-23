import React from 'react';
import { FaDivide } from 'react-icons/fa';

function Result(props){
    return (
        <div>
            <h2>{props.heading}</h2>
            <ul>
                {props.defArr.map((def, i) => <li key={i}>{def}</li>)}
            </ul>
        </div>
    );
}
export default Result;