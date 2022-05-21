import React from 'react'
import "../App.css"
import styles from "./style.module.css"
function Filters({filters,currentFilterBy,updateFilter}) {
  // console.log(currentFilterBy);
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurantOption">
            {Object.entries(filters).map(([key,value])=> (
                <div 
                key={key} 
                className="restaurant-option " 
                onClick={() => updateFilter(key)}>
                    {value}
                </div>
            ))}
            </div>
        </div>
  )
}

export default Filters   ;