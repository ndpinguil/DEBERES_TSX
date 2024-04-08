//Ejercicio #1
/*import React from 'react';
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

export default App;*/

// Ejercicio #2

import './App.css'
import React from 'react';

const colorCode = (color: string): number => {
  const colorMap: { [color: string]: number } = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };

  if (colorMap[color] !== undefined) {
    return colorMap[color];
  } else {
    throw new Error('Invalid color');
  }
};

const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const ColorCodeComponent: React.FC = () => {
  return (
    <div>
      <h1>Color Codes</h1>
      <ul>
        {COLORS.map((color, index) => (
          <li key={index}>
            {color}: {colorCode(color)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorCodeComponent;
