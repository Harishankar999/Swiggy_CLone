import React from 'react';
import './App.css'
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Resturant from './components/Resturant';

import userInfo from './data/userInfo.json'
import offers from './data/offers.json';
import restaurant from './data/restaurant.json';

const filters = {
  
             1:"Cost High to Lost",
              
             2:"Cost Lost to High",
                
             3: "Ratings",
                
             4:"Delivery Time",
                
             5:"Relevance"
                

}

function App() {
  const [filterBy,setFilterBy] = React.useState("");
  const [data, setData] = React.useState(restaurant);
  const updateFilter = (newFilter) => {
    switch(newFilter){
      case "1": {
        setFilterBy(1);
        data.sort((a,b)=>b.costForTwo - a.costForTwo)
        setData([...data]);
        break;
      }
      case "2": {
        setFilterBy(2);
        data.sort((a,b)=>  a.costForTwo - b.costForTwo)
        setData([...data]);
        break;
      }
      default:{
        setData(restaurant);
        break;
      }
    }
    
  }
  return (
    <div className="App">
      <Navbar {...userInfo.location} />
      <Offers offers= {offers}/>
      <Filters filters={filters} currentFilterBy={filterBy} updateFilter={updateFilter}/>
      <Resturant restaurant={data}/>
    </div>
  );
}

export default App;
