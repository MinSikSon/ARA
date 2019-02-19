import React, {Component} from 'react';

class Content extends Component {
    static defaultProps = {
        info: {
            id: 0,
            nickName: 'name',
            address: '',
            phone: '000-0000-0000',
            perpose: ''
        }
    }
    state = {
        nickName: 'name',
        address: '',
        phone: '000-0000-0000',
        perpose: ''
    }

    render() {
        const stylePage = {
            border: '3px solid black',
            padding: '8px',
            margin: '8px'
        };
        const {
            id, title, nickName, address, phone, perpose
        } = this.props.info;

        return(
            <div style={stylePage}>
                <h2>[Content.js]</h2>
               <ul>
                    <li>[id] : {id}</li>
                    <li>[title] : {title}</li>
                    <li>[nickName] : {nickName}</li>
                    <li>[address] : {address}</li>
                    <li>[phone] : {phone}</li> 
                    <li>[perpose] : {perpose} </li>
                </ul>
            </div>
        );
    }
}

export default Content;