import React, { useEffect, useState } from "react";
import { Pedido } from "../../types/pedidoType";
import { buscarPedidos } from "../../api/pedido";

function Admin() {
    const [pedidos, setPedidos] = useState<Pedido[]>();

    useEffect(() => {
        const buscarPedidosRequest = async () => {
            try {
                const resposta = await buscarPedidos();

                if (resposta.status == 200)
                    setPedidos(resposta.data);
            } catch (e) {
                console.error(e);
            }
        }

        buscarPedidosRequest();
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
    </>
}

export default Admin;