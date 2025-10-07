import React, { useEffect, useState } from "react";
import { Pedido } from "../../types/pedidoType";
import { buscarPedidos } from "../../api/pedido";
import { pedidosMock } from "../../types/mock";
import CardPedido from "../../components/cardPedido/CardPedido";
import styled from "styled-components";

const ListaPedidosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-self: center;
`;

export default function Pedidos() {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    useEffect(() => {
        const buscarPedidosRequest = async () => {
            try {
                const resposta = await buscarPedidos();
                setPedidos(resposta.data);
            } catch (e) {
                if (process.env.REACT_APP_AMBIENTE == 'dev')
                    setPedidos(pedidosMock)
            }
        }

        buscarPedidosRequest();
    }, []);
    
    return <>
        <h1>Pedidos</h1>

        <ListaPedidosContainer>
            {
                pedidos.map(pedido => {
                    return <CardPedido key={pedido.id} pedido={pedido} />
                })
            }
        </ListaPedidosContainer>
    </>
}