import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router';
import Header from './Header'
import "./Login.css"
import firebase from 'firebase'
import { auth } from './firebase'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     


     function Login(e){
         

        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))
     }

     function Register(e){
         e.preventDefault()
         auth.createUserWithEmailAndPassword(email, password)
         .then((auth)=>{
             console.log(auth)
             if(auth){
                navigate('/');
             

            }
   
         }).catch(error=>alert(error.message))

        
     }
    return (
        <div className="login">
        {/* <Header/> */}
        <Link to="/">
            <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>

        <div className="login_container">
            <h1>Sign In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />

                <button className="Login_signInButton" onClick={Login}>Sign In</button>
            </form>
            <p>

            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                 see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className="Login_registerButton" onClick={Register}>Create your Amazon Acount</button>
        </div>
            
        </div>
    )
}

export default Login
