import React, { Component } from 'react';
import 'css/SearchBoxMini.css'

class SearchBoxMini extends Component {
    render(){
        return (
            <div className="top">
            <img id="logo" src="https://avatars1.githubusercontent.com/u/47748609?s=200&v=4"/>
            <input id="searchBar" placeholder="검색"/>
            </div>
        );
    }
}

export default SearchBoxMini;