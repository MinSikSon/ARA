import React, { Component } from 'react';

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
    const style = {
        border: '1px solid black',
        padding: '8px',
        margin: '8px'
      };
      
    console.log('MapAndList.js render() START');
    return (
      <form style={style}>
        <div>MapAndList</div>
        <button>글쓰기</button>
        {console.log('MapAndList.js render() END')}
      </form>
    );
  }
}

export default MapAndList;
