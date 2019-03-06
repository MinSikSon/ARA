import React, { Component } from 'react';
import 'css/SearchBoxMini.css'

class SearchBoxMini extends Component {
    render(){
        return (
            <div className="SearchBoxMini">
                <div className="top">
                    <img id="logo" src="https://avatars1.githubusercontent.com/u/47748609?s=200&v=4"/>
                    <input id="searchBar" placeholder="검색"/>
                </div>
                <div className="middle">
                        <button id="filter">날짜</button>
                        <button id="filter">인원</button>
                        <button id="filter">필터</button>
                </div>
            </div>
        );
    }
}

export default SearchBoxMini;