import React from 'react';
import "../App.css"
import image from '../assets/restaurant1.jpeg'
import Restaurantchild from './Restaurantchild'

function Resturant(props) {
  return (
    <div className="container divider">
            <div className="cards">
                    {props.restaurant.map((restaurant)=>(
                        <Restaurantchild key={restaurant.id} restaurant={restaurant}/>
                    ))}
            </div>
        </div>
  )
}

export default Resturant