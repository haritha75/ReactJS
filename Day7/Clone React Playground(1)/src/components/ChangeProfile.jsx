import React from "react";
import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from '../App';

export const  ChangeProfile= () => {
  const {setUserName} = useContext(AppContext);
  const [newUSerName,setNewUserName] = useState("");
  return(
    <div> <input onChange={(event)=>{
      setNewUserName(event.target.value);
    }}/>
    <button onClick={()=>{
     setUserName(newUSerName);
    }}>Change Username</button> </div>
  )
};
