import React from "react";
import {useContext} from 'react';
import {AppContext} from '../App';
export const Home = () => {
  const {userName} = useContext(AppContext);
  return <h1> THIS IS THE HOME PAGE and USER IS: {userName}</h1>;
};
