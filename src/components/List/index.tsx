import React, { useState } from "react";
import style from "./List.module.scss";
import Item from "./item";

function List() {
    const [tarefas, setTarefas] = useState([{
        tarefa: "React",
        tempo: "02:00:00"
    }, {
        tarefa: "JavaScript",
        tempo: "01:00:00"
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }])
    

    return (
        <aside className={style.listaTarefas}>
                <h2 onClick={() => {
                    setTarefas([...tarefas, { tarefa: 'Estudar estado', tempo: '05:00:00'}])
                }}>Estudos do dia</h2>
            
        

            <ul> 
                {tarefas.map((item, index) => ( //função map
                   <Item
                        key={index}
                        {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default List;