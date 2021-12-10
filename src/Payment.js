import React, { useEffect, useState } from 'react'
import "./Payment.css"
import Header from './Header'
import { useStateValue } from './StateProvider';
import ChekoutProducts from './ChekoutProducts';

import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import db from './firebase';


function Payment() {
    const [{basket, user}, dispatch]= useStateValue();
    const navigate = useNavigate();


    const stripe = useStripe();
    const elements= useElements();

    const [error, setError]=useState(null);
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setclientSecret] = useState(true)

    useEffect(()=>{
        // generate the strype sictre which allow us to change

        const getClienetSecret = async ()=>{
            const reponse = await axios({
                method:"post",
                // stripe expect  the total in a currency
                url:`/payments/create?total=${getBasketTotal(basket)*100}`

            });
            setclientSecret(reponse.data.clientSecret)
        }
        getClienetSecret();

    }, [basket])
    

    const handleSubmit= async (event) =>{
        // for  all stripe stuff
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntnet= payment confirmation

            // db.collection("users")
            // .doc(user.id)
            // .collection("orders")
            // .set({
            //     basket:basket,

            // })

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type:"EMPTY_BASKET"
            })
            navigate.replace('/orders')

        })
        //  const payload = await stripe

    }

    const hanbdleChange= event =>{
        // liosten for change in the cardelemnet
        // and  display any  error as the costomer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")


    }


    
    return (
        <div className="">
        <Header/>
        <div className="payment">
        <div className="payment-container">
        <h1> 
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
            <div className="payment_section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
            <p>{user?.email}</p>
            <p>Sancaktepe/meclis M.</p>
            <p>Istanbul</p>

            </div>

            </div>
            {/* Review items */}
            
            
            <div className="payment_section">
            <div className="payment-title">
                <h3>Review items and delivery</h3>
            </div>
             <div className="payment_items">
                    
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

            {/* payment methode */}

            <div className="payment_section">
            <div className="payment-title">
            <h3>Payment Methode</h3>

            </div>

            {/* payment methode process  */}
            <div className="payment_details">
            <form action="" onSubmit={handleSubmit}>
                <CardElement onChange={hanbdleChange} />
                <div className="payment_price_conatiner">
                <CurrencyFormat
                renderText={(value)=>(
                <>
                 <h3> Order Total: {value}</h3>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}

            />
            <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now" }</span>
            </button>
                </div>
                {error && <div>{error}</div>}
            </form>

            </div>

            </div>

        </div>

        </div>

            
        </div>
    )
}

export default Payment
