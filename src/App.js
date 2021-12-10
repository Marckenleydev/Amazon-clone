
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./Header"
import Home from './Home';
import HomePage from './HomePage';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import PaymentStripe from './PaymentStripe';
import Orders from './Orders';






function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is ",authUser)

    
    if(authUser){
      dispatch({
        type: 'SET_USER',
        user:authUser
      })
    }else{
      dispatch({
        type: 'SET_USER',
        user:null
      })
    }
  })

    
  },[])
  return (
    
  

   <Router>
   <div className="App">
   
    
         <Routes>
         <Route  path="/checkout" element={<Checkout  />} />
          </Routes>
          <Routes>
         <Route  path="/login" element={<Login  />} />
          </Routes>

          <Routes>
         
         <Route path="/orders" element={<Orders  />} />

         
          </Routes>

          <Routes>
         
         <Route path="/payment" element={<PaymentStripe  />} />

         
          </Routes>
          
           

          <Routes>
          <Route exact path="/" element={<HomePage/>} />
          </Routes>
         
        
         
        
        


     
     

       
      
        </div>
      </Router>
    
  );
}

export default App;
