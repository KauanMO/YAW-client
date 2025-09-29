import React, { useEffect, useState } from "react";
import { Pedido } from "../../types/pedidoType";
import { buscarPedidos } from "../../api/pedido";
import { buscarConvidados } from "../../api/convidado";
import { Convidado } from "../../types/convidadoType";
import { convidadosMock, pedidosMock } from "../../types/mock";

function Admin() {
    const [pedidos, setPedidos] = useState<Pedido[]>();
    const [convidados, setConvidados] = useState<Convidado[]>();

    useEffect(() => {
        const buscarPedidosRequest = async () => {
            try {
                const resposta = await buscarPedidos();

                if (resposta.status === 200)
                    setPedidos(resposta.data);
            } catch (e) {
                if (process.env.REACT_APP_AMBIENTE == 'dev')
                    setPedidos(pedidosMock);
                else {
                    console.error(e);
                }
            }
        }

        const buscarConvidadosRequest = async () => {
            try {
                const resposta = await buscarConvidados();

                if (resposta.status === 200)
                    setConvidados(resposta.data);
            } catch (e) {
                if (process.env.REACT_APP_AMBIENTE == 'dev')
                    setConvidados(convidadosMock);
                else {
                    console.error(e);
                }
            }
        }

        buscarPedidosRequest();
        buscarConvidadosRequest();
    }, []);

    return <>
        <h1>Admin</h1>

        <h3>Pedidos</h3>
        <ul>
            {
                pedidos && pedidos.map(pedido => {
                    return <li key={pedido.id}>
                        {pedido.titulo}
                    </li>
                })
            }
        </ul>

        <h3>Convidados</h3>
        <ul>
            {
                convidados && convidados.map(convidado => {
                    return <li key={convidado.id}>
                        {convidado.nome} ({convidado.numero})
                    </li>
                })
            }
        </ul>
    </>
}

export default Admin;