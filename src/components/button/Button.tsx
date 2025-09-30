import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/Constants";

type Props = {
    onClick?: Function,
    children?: React.ReactNode
}

const ContainerBotaoRegistro = styled.div`
        background-color: ${colors.blue};
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