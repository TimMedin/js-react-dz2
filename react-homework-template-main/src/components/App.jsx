import React from 'react';
import { Message } from "./Message"
import { Button } from "./Button"
import { Greeting } from './Greeting';

export const App = () => {
  const userName = 'Name';
  
  const handleButtonClick = () => {
    console.log('Click');
  };

  return (
    <div>
      <Greeting name={userName} />
      <Message text="Це React" />
      <Button onClick={handleButtonClick} text="Натисни мене" />
    </div>
  );
};
