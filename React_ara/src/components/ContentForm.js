import React, { Component } from 'react';

class ContentForm extends Component{
    state = {
        name: '',
        address: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log('do nothing right now..');
    }

    render(){
        const styleComponent = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        return(
            <form onSubmit={this.handleSubmit}>
                <div style={styleComponent}>
                    <h2>[ContentForm.js]</h2>
                    <input
                        placeholder="글이름"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"

                    />
                    <input
                        placeholder="주소?"
                        value={this.state.address}
                        onChange={this.handleChange}
                        name="address"
                    />
                    <div>글이름: {this.state.name}</div>
                    <div>주소: {this.state.address}</div>
                    <button type="submit">생성(rerender 된다)</button>
                </div>
            </form>
        );
    };
}

export default ContentForm;