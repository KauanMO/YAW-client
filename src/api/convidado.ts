import api from "./builder";

const buscarConvidados = async () => {
    const resposta = await api.get('/convidados');

    return resposta;
}

export {
    buscarConvidados
}