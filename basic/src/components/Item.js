
import React from 'react';
import './Item.css';

import ItemDate from './ItemDate';
import Card from './Card';

const Item=(props)=>{
  return (
    <Card className="item">
      <ItemDate date ={props.date}/>
      <div className='item_description'>
        <h2>{props.title}</h2>
      </div>
    </Card>
  );
}
export default Item