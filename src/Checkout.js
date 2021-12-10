import React from 'react'
import "./Checkout.css"
import ChekoutProducts from './ChekoutProducts';
import Header from './Header'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket,user}, dispatch, ]= useStateValue();
    return (
        <div>
        <Header/>
        <div className="checkout">
        <div className="checkout_left">
       <img className="checkout_ad" 
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                 alt="amazon banner ads"/>
                
                <div className="">
                     <h3>hello,{!user? "Guest": user.email}</h3>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    {basket.map(item =>(
                        <ChekoutProducts 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                    ))}
                </div>
       </div>
       <div className="chekout_right">
       <Subtotal/>
           
       </div>
            

        </div>
      
        </div>
    )
}

export default Checkout
