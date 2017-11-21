import React from 'react';
import Header from './Header/Header.js';
import GetCards from './Cards/GetCards';

const App = () => (
    <div>
        {Header()}
        {GetCards()}
    </div>
)

export default App;