import { RegistroConvidado } from "../types/convidadoType";
import api from "./builder";

export const buscarConvidados = async () => {
    const resposta = await api.get('/convidados');

    return resposta;
}

export const cadastrarConvidado = async (infoNovoConvidado: RegistroConvidado) => {
    const resposta = await api.post('/convidados', infoNovoConvidado);

    return resposta;
}