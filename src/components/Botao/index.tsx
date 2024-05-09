import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<React.PropsWithChildren<{}>>{
    // função obrigatória render da class component
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;