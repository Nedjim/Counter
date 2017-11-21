import React from 'react';
import CreateCard from './CreateCard';
import data from '../../data/data.json';

const GetCards = () => (
    <div id='products'>
        {data.products.map( e => (
             <CreateCard key={e.id} music={e}/>
        ))}
    </div>
)

export default GetCards;