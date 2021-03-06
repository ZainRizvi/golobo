import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';

function App() {
  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world"></Header>
      <HouseList/>
    </div>
  );
}

export default App;
