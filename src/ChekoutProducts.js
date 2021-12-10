import React from 'react'
import "./ChekoutProducts.css"
import { useStateValue } from './StateProvider';

function ChekoutProducts({id, image,title, price, rating}) {
    const [{basket}, dispatch]= useStateValue();
    const Remove =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })

    }

    return (

        <div className="ChekoutProducts">
        <img className="ChekoutProducts__image" src={image} />

        <div className="ChekoutProducts__info">
            <p className="ChekoutProducts_title">{title}</p>
            <p className="ChekoutProducts_price">
            <small>$</small>
            <strong>{price}</strong>
           
            
            </p>
            <div className="ChekoutProducts__rating">
                
                {Array(rating)
                .fill()
                .map((_, i)=>(
                    <p>⭐</p>
                ))}
               
            </div>
            <button onClick={Remove}>Remove from the Basket</button>
        </div>
            
        </div>
    )
}

export default ChekoutProducts
