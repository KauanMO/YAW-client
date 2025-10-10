import React from "react";
import styled from "styled-components";
import { styles } from "../../utils/Constants";

type Props = {
    onClick?: Function,
    children?: React.ReactNode
}

const ContainerBotaoRegistro = styled.div`
    background-color: ${styles.azul};
    padding: .3rem;
    border-radius: 50%;
    width: .9rem;
    height: .9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
`;

const ContainerBotaoSubmit = styled.button`
    background-color: ${styles.roxo_81};
    color: white;
    border: none;
    border-radius: ${styles.borderRadius};
    padding: 10px;
    cursor: pointer;
`;

export const BotaoRegistro: React.FC<Props> = ({ onClick }) => {
    return <ContainerBotaoRegistro onClick={() => onClick?.() ?? console.error('onClick não implementado')}>
        +
    </ContainerBotaoRegistro>
}

export const BotaoSubmit: React.FC<Props> = ({ children }) => {
    return <ContainerBotaoSubmit>
        {children}
    </ContainerBotaoSubmit>
}