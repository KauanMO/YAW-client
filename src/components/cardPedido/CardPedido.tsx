import React from "react";
import { Pedido } from "../../types/pedidoType";
import styled from "styled-components";
import { formatarBRL } from "../../utils/Funcoes";
import BotaoReservarPedido from "../botarReservarPedido/BotaoReservarPedido";

type Props = {
    pedido: Pedido
}

const CardPedidoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 80%;
    box-shadow: 7px 5px 5px -4px #000000;
    padding: 1rem;
    border: 1px solid black;
    justify-content: space-around;
`;

const FotoPedido = styled.img`
    width: 100px;
    height: 100px;
`;

const InformacoesPedido = styled.div`
    display: flex;
    flex-direction: column;
`;

const TituloPedido = styled.span`
`;

const PrecoPedido = styled.span`
`;

const LogoLoja = styled.img`
    width: 50px;
    height: 50px;
`;

export default function CardPedido({ pedido }: Props) {
    const logosLojas: Record<string, string> = {
        "amazon": "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
    }

    const lojaEncontrada: string | undefined = Object.keys(logosLojas).find(loja => pedido.link.toLowerCase().includes(loja))

    const logoSrc = lojaEncontrada ? logosLojas[lojaEncontrada] : '';

    return <CardPedidoContainer>
        <FotoPedido src={pedido.foto} />

        <InformacoesPedido>
            <TituloPedido>{pedido.titulo}</TituloPedido>
            <PrecoPedido>{formatarBRL(pedido.preco)}</PrecoPedido>
        </InformacoesPedido>

        <LogoLoja src={logoSrc} />

        <BotaoReservarPedido />
    </CardPedidoContainer>
}