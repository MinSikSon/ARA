import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'shared/App';

// class Root extends Component
// {
//     render()
//     {
//         console.log('client/Root.js START');
//         return(
//             <div>
//                 <BrowserRouter>
//                     <App />
//                 </BrowserRouter>
//                 {console.log('client/Root.js END')}
//             </div>
//         );
//     }
// }

const Root = () => (
    <div>
    {console.log('Root.js START')}
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    {console.log('Root.js END')}
    </div>
);


export default Root;