import React, {useState} from "react"
import Registration from "./Registration";
import Login from "./Login";

const LoginForm=()=>{
    const [wantSignUp,setWantSignUp]=useState(0)
    return (
        <div >
            {wantSignUp?<Registration setWantSignUp={setWantSignUp}/>:<Login setWantSignUp={setWantSignUp}/>}

            </div>
    );
}

export default LoginForm;
