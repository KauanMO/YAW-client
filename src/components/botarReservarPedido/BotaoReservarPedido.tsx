import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/Constants";

const BotaoReservarPedidoContainer = styled.div`
    background-color: ${colors.blue};
    padding: 1rem;
    border-radius: 50%;
    color: white;
`;

export default function BotaoReservarPedido() {
    return <BotaoReservarPedidoContainer>
        <span>↓</span>
    </BotaoReservarPedidoContainer>
}