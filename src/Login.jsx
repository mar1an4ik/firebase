import React, {useState} from "react"
import fire from "./config/firebase";

const Login=(props)=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleChange=({target :{value,id}})=>{

        if (id=="email") setEmail(value);
        if (id=="password") setPassword(value);
    }

    const handleLogIn=()=>{
    fire.auth().signInWithEmailAndPassword(email,password)
        .then((result)=>{console.log("SuCCES")})
        .catch((error)=>{console.log(error)})
    }

    return (
        <div >
            <span>LOGIN</span>
            <div>
            <input type={"email"} placeholder={"email"} id={"email"} onChange={handleChange}/>
            <input type={"password"} placeholder={"password"} id={"password"} onChange={handleChange}/>
            </div>
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={()=>{props.setWantSignUp(1)}}>I want to Sign Up  </button>
</div>
</div>
    );
}

export default Login;
