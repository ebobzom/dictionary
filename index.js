import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Header from './components/Header'
import Search from './components/Search'

class App extends React.Component{

    render(){
        return (
            <div className= 'container '>
                <Header />
                <Search />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));