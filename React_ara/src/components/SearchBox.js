import React, { Component } from 'react';
import 'css/SearchBox.css'

class SearchBox extends Component {
    render(){
        return (
            <div className="SearchBox">
                <div className="firstText">
                    <h1>
                        원하는 여행지와 친구들을 <br/>
                        찾아보세요.
                    </h1>
                </div>
                <div className="margin"></div>
                <form>
                    <div className="destination">
                        <div>목적지</div>
                        <input placeholder="모든 위치"></input> 
                    </div>
                    <div className="checkInOut">
                        <div id="checkIn">
                            <div>시작시간</div>
                            <input placeholder="모든 위치"></input> 
                        </div>
                        <div id="checkOut">
                            <div>종료시간</div>
                            <input placeholder="모든 위치"></input> 
                        </div>
                    </div>
                    <div className="member">
                        <div>인원</div>
                        <input placeholder="게스트 2명"></input> 
                    </div>
                </form>
                <div className="searchButton">
                    <button>검색</button>
                </div>
                
            </div>
        );
    }
}

export default SearchBox;