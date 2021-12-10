import React from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Payment from './Payment'
const promise = loadStripe('pk_test_51JoAFhB9HPpweD08i3Zlrvbk9CkoicvtktmTZSJ4j0WDVSovWgyV3GWcLcNodb0RQkjDJNhInoODawBwSDLQ8586001BuPDOrQ')

function PaymentStripe() {
    return (
        <div>
            <Elements stripe={promise} >

       <Payment  />
      </Elements>
        </div>
    )
}

export default PaymentStripe
