import React from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms/> 
      <List/>  
      <Cronometro/>
    </div>
  );
}

export default App;
