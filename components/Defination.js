import React from 'react';
import Result from './Result';

function getDefination(props){
    let audioPart; 
    if(props.sound.startsWith('bix')){
        audioPart1 = 'bix'
    } else if(props.sound.startsWith('gg')){
        audioPart = 'gg'
    } else if(/^\d+$/.test(props.sound[0])){
        audioPart = Number(props.sound[0]);
    }else{
        audioPart = props.sound[0];
    }

    return (
        <div className="main">
            {props.sound &&
            <div>
                <h1>
                    <span>{props.word}</span>

                    <audio controls>
                        <source 
                        src={`https://media.merriam-webster.com/soundc11/${audioPart}/${props.sound}.wav`} 
                        type={'audio/wav'}
                        >
                        </source>
                    </audio>
                </h1>
            </div> 
            }
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
