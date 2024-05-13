import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<React.PropsWithChildren<{
    type?: "button" | "submit" |  "reset" | undefined}>
>{
    // função obrigatória render da class component
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;