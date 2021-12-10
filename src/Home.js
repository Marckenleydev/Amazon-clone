import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
          <div className="home_container">
              <img className="home_img" src="https://m.media-amazon.com/images/I/81NxMk9hGdL._SX3000_.jpg"/>

              <div className="home__row">
              <Product 
              id={34445353}
                  title="Lisa Scottoline"
                  price={29.99}
                  image="https://m.media-amazon.com/images/I/51Pz5L+9mSL._SY346_.jpg"
                  rating={4}
              />
               <Product 
               id={344353}
                  title="Instant Vortex Plus 6 Quart Air Fryer, Customizable Smart Cooking Programs, Digital Touchscreen and Large Non-Stick Air Fryer Basket, Stainless Steel
Review Star Icon"
                  price={35.99}
                  image="https://m.media-amazon.com/images/I/41WAoH5H6NL.jpg"
                  rating={5}
              />
              </div>

              <div className="home__row">
              <Product 
              id={55353}
                  title="SAMSUNG Galaxy Tab S7 11-inch Android Tablet 128GB Wi-Fi Bluetooth S Pen Fast Charging USB-C Portk"
                  price={499.99}
                  image="https://m.media-amazon.com/images/I/41SpwvaFykL.jpg"
                  rating={4}
              />
               <Product 
               id={5353}
                  title="Orzly Carry Case Compatible with Nintendo Switch and New Switch OLED Console - Black Protective Hard Portable "
                  price={15.99}
                  image="https://m.media-amazon.com/images/I/71KbnwsiD-L._AC_UY218_.jpg"
                  rating={5}
              />
               <Product 
               id={34853}
                  title="Beats Studio Buds – True Wireless Noise Cancelling Earbuds – Compatible with Apple & Android, Built-in Microphone"
                  price={1549.99}
                  image="https://m.media-amazon.com/images/I/51utxdpV8cS._AC_UY218_.jpg"
                  rating={4}
              />

              </div>

              <div className="home__row">
              <Product 
              id={39353}
                  title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
                  price={99.99}
                  image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
                  rating={4}
              />

              </div>


              <div className="home__row">

              <Product 
              id={393443}
                  title="PS5 Stand, VOYEE Vertical Stand Compatible "
                  price={29.99}
                  image="https://m.media-amazon.com/images/I/71AHfgV6JIS._AC_UY218_.jpg"
                  rating={4}
              />

<Product 
              id={39353}
                  title="NBA 2K22 - PlayStation 5"
                  price={39.99}
                  image="https://m.media-amazon.com/images/I/91KyOdzdgsS._AC_UY218_.jpg"
                  rating={4}
              />

<Product 
              id={39353}
                  title="Casio Men's 'G Shock' Quartz Resin Casual Watch"
                  price={99.99}
                  image="https://m.media-amazon.com/images/I/81kcUEwhbBL._AC_UL320_.jpg"
                  rating={5}
              />

<Product 
              id={39353}
                  title="GUSODOR Led Strip Lights 32.8 Feet Smart Led Lights for  "
                  price={15.99}
                  image="https://m.media-amazon.com/images/I/81yKDq4U6dS._AC_SY200_.jpg"
                  rating={3}
              />

              </div>



          </div>
        </div>
    )
}

export default Home
