import React from "react";
import Item from './ProductsItem';
import Card from './Card';
import './Products.css'



const Products = (props) =>{

  return (

   <Card className="products">
   <Item
   title = {props.item[0].title}
     amount = {props.item[0].amount}
     date= {props.item[0].date}

     />
     <ProductionItem
   title = {props.item[1].title}
     amount = {props.item[1].amount}
     date= {props.item[1].date}

     />
     <ProductionItem
     title = {props.item[2].title}
     amount = {props.item[2].amount}
     date= {props.item[2].date}

     />
     <ProductionItem
   title = {props.item[3].title}
     amount = {props.item[3].amount}
     date= {props.item[3].date}

     />

   </Card>


  );
}