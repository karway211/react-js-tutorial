import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lesson from './01-components/Lesson';
import CounterButton from './02-state/Lesson';
import CounterBtton1 from './03-props/Lesson';

function App() {
  return (
    <div className="App">
      {/* <Lesson /> */}
      {/* <CounterButton /> */}
      <CounterBtton1 />
    </div>
  );
}

export default App;
