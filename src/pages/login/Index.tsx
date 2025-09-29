import React, { useState } from "react";
import { loginAdministrador } from "../../api/admin";
import { LoginAdministrador } from "../../types/adminType";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { loginAdminMock } from "../../types/mock";

function Login() {
    const navigate = useNavigate();

    const [credenciais, setCredenciais] = useState<LoginAdministrador>({
        login: '',
        senha: ''
    });

    const fazerLogin = async () => {
        try {
            const resposta = await loginAdministrador(credenciais);

            if (resposta.status === 200) navigate('/admin');
        } catch (e: any) {
            if (process.env.REACT_APP_AMBIENTE == 'dev'
                && credenciais.login === loginAdminMock.login
                && credenciais.senha === loginAdminMock.senha
            ) navigate('/admin');

            else {
                const error = e as AxiosError

                if (error.status === 400) alert("credencias invalidas");
            }
        }
    }

    const alterarCredenciais = (credencial: string, valor: string) => {
        setCredenciais({
            ...credenciais,
            [credencial]: valor
        })
    }

    return <>
        <h1>Entrar como administrador</h1>

        <input onInput={(valor) => alterarCredenciais('login', valor.currentTarget.value)}
            value={credenciais.login}
            placeholder="Login"></input>
        <input onInput={(valor) => alterarCredenciais('senha', valor.currentTarget.value)}
            value={credenciais.senha}
            placeholder="Senha"
            type="password"></input>
        <button onClick={fazerLogin}>Entrar</button>
    </>
}

export default Login;