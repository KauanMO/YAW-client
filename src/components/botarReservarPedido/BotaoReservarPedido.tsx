import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/Constants";

const BotaoReservarPedidoContainer = styled.div`
    background-color: ${colors.blue};
    padding: 1rem;
    border-radius: 50%;
    color: white;
    position: relative;
    cursor: pointer;
`;

const DropdownOpcoesReserva = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 10rem;
    position: absolute;
    background-color: white;
    left: -8.5rem;
    top: 2.8rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
`;

const PrimeiraOpcaoReserva = styled.div`
    padding: .3rem .6rem .3rem .6rem;
    color: black;
`;

const OpcaoReserva = styled.div`
    padding: .3rem .6rem .3rem .6rem;
    border-top: 1px solid #ccc;
    color: black;
`;

export default function BotaoReservarPedido() {
    const [dropDownOpcoesReservaVisivel, setDropDownOpcoesReservaVisivel] = useState<boolean>(false);

    return <BotaoReservarPedidoContainer onClick={() => setDropDownOpcoesReservaVisivel(!dropDownOpcoesReservaVisivel)}>
            {
                dropDownOpcoesReservaVisivel
                    ?
                    <DropdownOpcoesReserva>
                        <PrimeiraOpcaoReserva>Vou mandar um PIX</PrimeiraOpcaoReserva>
                        <OpcaoReserva>Vou levar na festa</OpcaoReserva>
                        <OpcaoReserva>Quero mandar entregar</OpcaoReserva>
                    </DropdownOpcoesReserva>
                    : null
            }
            <span>↓</span>
        </BotaoReservarPedidoContainer>
}