import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= {term:''}; //manually changing state
    }
    inputChangeHandler(term){
        this.setState({term});
        this.props.searchHandler(term);
    }
    render(){
        return <input onChange={ event => this.inputChangeHandler(event.target.value)} />; //updating state
        

       // return <input onChange={ event => this.setState({term:event.target.value})} />; //updating state

       // return <input onChange={ event => console.log(event.target.value)} />;
    }

}


export default SearchBar ;