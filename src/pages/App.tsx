import React, {useState} from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);


  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas} /> 
      <List tarefas={tarefas}/>  
      <Cronometro/>
    </div>
  );
}

export default App;
