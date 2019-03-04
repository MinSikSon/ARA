import React from 'react';
import { Start, SearchBox } from 'components';
import 'Home.css';

const Home = () =>{
    const stylePage = {
        border: '3px solid black',
        padding: '8px',
        margin: '8px'
      };
    return (
        <div className="Home" style={stylePage}>
            {/* <h2>[Home.js]</h2> */}
            {/* <Start/> */}
            <SearchBox/>
        </div>
    );
}

export default Home;