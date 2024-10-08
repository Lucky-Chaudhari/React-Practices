
import './App.css';
import  Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card"
function App() {


  const response = [
    {
      itemName:"Nirma",
      itemDay:"20",
      itemMonth:"June",
      itemYear:"1990"
    },
    { itemName:"SurfExcel",
      itemDay:"22",
      itemMonth:"July",
      itemYear:"1998"
    },
    {
      itemName:"Tide",
      itemDay:"28",
      itemMonth:"January",
      itemYear:"1990"
    },

      {
        itemName:"555",
        itemDay:"24",
        itemMonth:"August",
        itemYear:"2000"}];
  return (


    // In This Components we always use parent container in inside parent container we are putting some coustme componenta as Child this is comparsory
    <>

    <Card>

    <Item name={response[0].itemName}>
    </Item>
    <ItemDate day ={response[0].itemDay} month={response[0].itemMonth} year ={response[0].itemYear}></ItemDate>

    <Item name={response[1].itemName}></Item>
    <ItemDate day ={response[1].itemDay} month={response[1].itemMonth} year ={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName}></Item>
    <ItemDate  day ={response[2].itemDay} month={response[2].itemMonth} year ={response[2].itemYear}></ItemDate>

    <Item name={response[3].itemName}></Item>
    <ItemDate  day ={response[3].itemDay} month={response[3].itemMonth} year ={response[3].itemYear}></ItemDate>
    <div className="App">
    Hello Lucky Chaudhari
    </div>
    </Card>
 </>

  );
}

export default App;
