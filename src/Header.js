import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import "./Header.css"
import HomePage from './HomePage'
import { useStateValue } from './StateProvider';




function Header() {
    const [{basket,user}, dispatch, ]= useStateValue();
    function handleSignIn(){
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
         <Link to="/">
         <img 
             className="header-logo" src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"/>

         </Link>


      
             <div className="header-search">
                 <input className="header-search-input" type="text" placeholder="Search"/>
                 <div className="header-searchIcon"> <div className="seachIcon"><i class="fas fa-search"></i></div> </div>
             </div>

             <div className="header_nav">
             <Link to= {!user && "/login"} > 
                 <div className="header-option" onClick={handleSignIn}>
                  
                 
                 <span className="header_option_lineOne">Hello {!user? "Guest": user.email} </span>
                 <span className="header_option_lineTwo">{user ?"Sign Out":"Sign In"}</span>
                 

                 </div>
                 </Link>

                 
                 <div className="header-option">

                 <span className="header_option_lineOne">Returns</span>
                 <span className="header_option_lineTwo">& Orders</span>

                 </div>
                 
                 <div className="header-option">

                 <span className="header_option_lineOne">Your</span>
                 <span className="header_option_lineTwo">Prime</span>

                 </div>
                 <Link to="/checkout">
                 <div className="header_optionChart">
                     <div className="shoppingIcon">
                     <i class="fas fa-shopping-cart"></i>
                     </div>
                     <span className="header_option_lineTwo">{basket.length}</span>

                 </div>

                 </Link>
                


             </div>
            
        
            
        </div>
    )
}

export default Header
