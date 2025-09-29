import api from "./builder";

const buscarPedidos = async () => {
    const resposta = await api.get('/pedidos');

    return resposta;
}

export {
    buscarPedidos
}