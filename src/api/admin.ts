import { AxiosError } from "axios";
import { LoginAdministrador } from "../types/adminType";
import api from "./builder";

const loginAdministrador = async (credenciais: LoginAdministrador) => {
    const resposta = await api.post('/admin', credenciais);

    return resposta;
}

export {
    loginAdministrador
}