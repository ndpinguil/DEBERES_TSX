import React from 'react';
import TwoFer from './TwoFer';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>Two Fer</h1>
      <TwoFer />
      <TwoFer name="Alice" />
      <TwoFer name="Bob" />
    </div>
  );
}

export default App;
