import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Home from "./Home";
import React from "react"
import LoginForm from "./LoginForm";
import firebaseDb from "./config/firebase";

function App() {

    const [user, setUser] = useState(null)
    const authChecker = () => {
        firebaseDb.auth().onAuthStateChanged((user) => {
            if (user) setUser(user)
            else setUser(null)
        })
    }

    useEffect(() => {
        authChecker();
        console.log(user)
    },)

    return (
        <div className="App">


            {user ? <Home/> : <LoginForm />}


        </div>
    );
}

export default App;
