import React, {useEffect, useState} from "react"
import fire from "./config/firebase";
import Contacts from "./Contacts";
const Home=(props)=>{
let logOut=()=>{
    fire.auth().signOut();
}
return(<div>
        <button onClick={logOut}>LogOut</button>
        <Contacts/>

    </div>
)
}

export default Home;
