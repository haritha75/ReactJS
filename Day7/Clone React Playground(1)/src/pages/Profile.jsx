import React from "react";
import {useContext} from 'react';
import {AppContext} from '../App';
import {ChangeProfile} from '../components/ChangeProfile';

export const Profile = () => {
  const {userName} = useContext(AppContext);
  return <div> PROFILE,user is : {userName}
     <ChangeProfile />

  </div>;
};
