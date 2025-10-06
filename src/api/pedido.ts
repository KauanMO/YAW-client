import { RegistroPedido } from "../types/pedidoType";
import api from "./builder";

const buscarPedidos = async () => {
    const resposta = await api.get('/pedidos');

    return resposta;
}

const cadastrarPedido = async (pedido: RegistroPedido) => {
    const resposta = await api.post('/pedidos', pedido);

    return resposta;
}

export {
    buscarPedidos,
    cadastrarPedido
}