import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'components'
import 'css/MapAndList.css'
import {ContentList} from 'components';
import SearchBoxMini from './SearchBoxMini';

class MapAndList extends Component {
  // DB 에서 관리해야함
  id = 2
  state = {
      information: [
        {
          id: 0,
          numOfpeople: 0,
          nickName: 'choi',
          phone: '010-1111-1111',
          perpose: 'have a lunch'
        },
        {
          id: 1,
          numOfpeople: 4,
          nickName: 'son',
          phone: '010-2222-2222',
          perpose: 'look around'
        }
      ]
    }
    count = 0

  render() {

      
    const {information} = this.state;
    console.log('MapAndList.js render() START');


    return (
      <form className="MapAndList">
        {/* <h2>[MapAndList.js]</h2> */}
          {/* <img id="logo" src="https://avatars1.githubusercontent.com/u/47748609?s=200&v=4"/>
          <input id="searchBar" placeholder="검색"/> */}
        <SearchBoxMini/>
        <div className="middle">
          <button id="filter">날짜</button>
          <button id="filter">인원</button>
          <button id="filter">필터</button>
        </div>
        <div className="bottom">
          bottom
          <div>information</div>
          <div>
            [list]
            <ContentList data={information}/> 
          </div>

        </div>



        {console.log('MapAndList.js render() END')}
      </form>
    );
  }
}

export default MapAndList;
