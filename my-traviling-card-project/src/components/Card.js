


import { useState } from "react";


function Card({id , image, info, price,name,removeTour}){

  const[readmore,setReadmore] = useState(false);
  const description = readmore ? info :`${(info.substring(0,200))}`;
 function readmoreHandler(){
       setReadmore(!readmore);
  }


return(
<div className="card">
   <img src={image} className="img"></img>

   <div className="tour-info">

     <div className="toure-details">

           <h4 className="price">₹ {price}</h4>
             <h4 className="name">{name}</h4>

       </div>
<div className="decr">
{description}
<span className="read-more"onClick={readmoreHandler}>
{readmore ?`Show Less`:`Read More`}
</span>
</div>
<button  className="btn-red" onClick={()=>removeTour(id)}>
Not Interested
</button>
</div>
   </div>
);

}
export default Card;