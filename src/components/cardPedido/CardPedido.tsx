import React from "react";
import { Pedido } from "../../types/pedidoType";
import styled from "styled-components";
import { formatarBRL } from "../../utils/Funcoes";
import { styles } from "../../utils/Constants";

type Props = {
    pedido: Pedido
}

const CardPedidoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-self: center;
    width: 85%;
    padding: 1rem;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: ${styles.borderRadius};
    gap: 1rem;
`;

const FotoPedido = styled.img`
    width: 100px;
    height: 100px;
`;

const InformacoesPedido = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;
`;

const TituloPedido = styled.a`
    color: black;
`;

const PrecoPedido = styled.span`
    color: ${styles.verde};
`;

const DescricaoPedido = styled.span`
    font-size: .8rem;
`;

const BotoesReservarPedidoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SelectOpcaoReserva = styled.select`
    padding: .6rem;
    font-size: .8rem;
    border-radius: ${styles.borderRadius};
    background-color: white;

    &:focus {
        background-color: #e4e4e4;
    }
`;

const BotaoReservar = styled.div`
    display: flex;
    align-items: center;
    border-radius: ${styles.borderRadius};
    padding: .4rem .7rem;
    background-color: #453e65;
    color: white;
    font-size: .8rem;
`;

export default function CardPedido({ pedido }: Props) {
    return <CardPedidoContainer>
        <FotoPedido src={pedido.foto} />

        <InformacoesPedido>
            <TituloPedido target="_blank" href={pedido.link}>{pedido.titulo}</TituloPedido>
            <DescricaoPedido>{pedido.descricao}</DescricaoPedido>
            <PrecoPedido>{formatarBRL(pedido.preco)}</PrecoPedido>

            <BotoesReservarPedidoContainer>
                <SelectOpcaoReserva>
                    <option value="default">Selecione uma opção</option>
                    <option value="PIX">Vou enviar um PIX</option>
                    <option value="Levar">Vou levar na festa</option>
                    <option value="Entrega">Vou mandar entregar</option>
                </SelectOpcaoReserva>
                <BotaoReservar>Reservar</BotaoReservar>
            </BotoesReservarPedidoContainer>
        </InformacoesPedido>
    </CardPedidoContainer>
}