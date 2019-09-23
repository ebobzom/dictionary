import React from 'react';
import Result from './Result';

function getDefination(props){

    return (
        <div className="main">
            {props.sound &&
            <div>
                <h1>
                    <span>{props.word}</span>

                    <audio controls>
                        <source 
                        src={props.sound} 
                        type={'audio/wav'}
                        >
                        </source>
                    </audio>
                </h1>
            </div> 
            }
            {props.errorValue ? 
            <p>
                This is not an <strong>English</strong> word or this is the plural form of a word.
                </p> : null
            }
            {props.resultArr && 
            <div className={'main-result'}>
                {props.resultArr.map((ans,index) => <Result key={index} heading={ans[0]} defArr={ans[1]} />)}
            </div>
            }
        </div>
    );
}

export default getDefination;

