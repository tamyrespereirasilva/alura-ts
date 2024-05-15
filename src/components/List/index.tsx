import React from "react";
import { ITarefa } from "../../types/tarefa";
import style from "./List.module.scss";
import Item from "./item";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void

}

export default function List({ tarefas, selecionaTarefa } : Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul> 
                {tarefas.map(item  => ( //função map
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

