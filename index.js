import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Search from './components/Search';
import Defination from './components/Defination';
import webFont from 'webfontloader';


webFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
})

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            audio: '',
            word: '',
            result: null,
            error: null
        }
        this.setDefinations = this.setDefinations.bind(this);
        this.getEnteredWord = this.getEnteredWord.bind(this);
    }
    setDefinations(e){
        this.setState({ word: e.target.value, audio: this.state.audio})
    }

    getEnteredWord(word,e){
        e.preventDefault();
        
        fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=20c06dbc-7b3d-47d7-af7c-4474526c7f77`)
        .then(response => response.json())
        .then(result => {
            if(typeof result[0] === 'object'){
                let audio = result[0].hwi.prs[0].sound.audio;
                let definations = [];
                result.map(wordObj => definations.push([wordObj.fl, wordObj.shortdef]) )

                // make audio url compliant with meriam webster specification
                let audioPart; 
                if(audio.startsWith('bix')){
                    audioPart = 'bix'
                } else if(audio.startsWith('gg')){
                    audioPart = 'gg'
                } else if(/^\d+$/.test(audio[0])){
                    audioPart = Number(audio[0]);
                }else{
                    audioPart = audio[0];
                }
                let audioUrl = `https://media.merriam-webster.com/soundc11/${audioPart}/${audio}.wav`;

                this.setState({result: definations, audio: audioUrl, error: null});

            }else if(typeof result[0] === 'string'){
                this.setState({result: null, error: 'error'})
            }
        })
        .catch(e => {
            console.log(e)
            this.setState({error: e})}
            )
     
    }


    render(){
        return (
            <div className= 'container '>
                <Header />
                <Search searchWord={this.getEnteredWord} word={this.state.word} setDef={this.setDefinations} />
                <Defination word={this.state.word} sound={this.state.audio} resultArr={this.state.result}  errorValue = {this.state.error} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));