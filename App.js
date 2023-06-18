import React from 'react';
import ReactDOM from 'react-dom/client';

//Functional Components

const TitleComponent = () => (
    <h1 className='head'>
        Namaste React
    </h1>
);

const HeaderComponent = () => (
    <div id="container 1">
        <TitleComponent />
        <h1>Hello Welcome to React!</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);