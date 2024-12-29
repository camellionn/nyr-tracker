import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Demon } from 'megaten';
import DemonList from './components/DemonList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <DemonList/>
    </>
  );
}

export default App;
