import React, {useState} from "react"
import fire from "./config/firebase";

const Registration=(props)=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleChange=({target :{value,id}})=>{

        if (id=="email") setEmail(value);
        if (id=="password") setPassword(value);
    }
    const handleRegistration=()=>{
        fire.auth().createUserWithEmailAndPassword(email,password)
            .then((result)=>{console.log("SuCCES")})
            .catch((error)=>{console.log(error)})

    }
    return (
        <div >
        <div>
            <span>REGISTRATION</span>
        </div>
            <div>
            <input type={"text"} placeholder={"email"} id={"email"} onChange={handleChange}/>
            <input type={"password"} placeholder={"password"} id={"password"} onChange={handleChange}/>
        </div>
            <div>
            <button onClick={handleRegistration}>Sign up</button>
            <button onClick={()=>{props.setWantSignUp(0)}}>I want to Log In  </button>
            </div>
        </div>
    );
}

export default Registration;
