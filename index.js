import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Search from './components/Search';
import Defination from './components/Defination';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            result: null,
            error: null
        }
        this.setDefinations = this.setDefinations.bind(this);
        this.getEnteredWord = this.getEnteredWord.bind(this);
    }
    setDefinations(e){
        this.setState({ word: e.target.value})
    }

    getEnteredWord(word,e){
        e.preventDefault();
        fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=20c06dbc-7b3d-47d7-af7c-4474526c7f77`)
        .then(response => response.json())
        .then(result => {
            let {shortdef} = result[0];
            this.setState({result: shortdef})
        })
        .catch(e => {
            console.log(e)
            this.setState({error: e})})
    }


    render(){
        return (
            <div className= 'container '>
                <Header />
                <Search searchWord={this.getEnteredWord} word={this.state.word} setDef={this.setDefinations} />
                <Defination resultArr={this.state.result} errorValue = {this.state.error} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));