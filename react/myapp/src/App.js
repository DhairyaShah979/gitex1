import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import LifecycleA from './components/LifecycleA';


function App() {
  return (
    <div className="App">

      <LifecycleA />
    </div>
  );
}

export default App;
