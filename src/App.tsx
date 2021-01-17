import React from 'react';
import './App.css';
import { Draggable } from './component/Draggable';
import { Box } from './component/Box';

function App() {
  return (
    <Draggable>
      <Box />
    </Draggable>
  );
}

export default App;
