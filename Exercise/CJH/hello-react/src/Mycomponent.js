import React, {Component} from 'react';

class MyComponent extends Component{
    render(){
        return(
            <div>
                안녕하세요, 제 이름은 {this.props.name}입니다.
                저는 {this.props.purpose} 하고싶습니다.
                현재 {this.props.spot}에서 만나고 싶습니다.
                {this.props.time}에 같이 밥한끼 하실 분 {this.props.number}모십니다.
            </div>
        )
    }
}
MyComponent.defaultProps={
    name: '기본이름',
    purpose: '기본 목적',
    spot: '기본 모임 장소',
    time: '기본 시간',
    number: '기본 명수'
}
export default MyComponent;