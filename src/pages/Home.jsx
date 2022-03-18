import React from 'react';
import Nav from '../components/Nav'
import Header from "../components/Header";
import Sect from "../components/Sect";
import Mapfirst from "../components/Mapfirst";
import MapSecond from '../components/MapSecond';
import Mapthird from '../components/Mapthird';

const Home = () => {
  return (
    <div>
        <Nav/>
      <Header/>
      <Sect/>
      <Mapfirst/>
      <MapSecond/>
      <Mapthird/>
    </div>
  )
}

export default Home;