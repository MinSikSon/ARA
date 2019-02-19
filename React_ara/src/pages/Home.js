import React from 'react';
import { Start } from 'components';

const Home = () =>{
    const stylePage = {
        border: '3px solid black',
        padding: '8px',
        margin: '8px'
      };
    return (
        <div style={stylePage}>
            <h2>[Home.js]</h2>
            <Start/>
        </div>
    );
}

export default Home;