import React, { useState } from "react";
import { loginAdministrador } from "../../api/admin";
import { LoginAdministrador } from "../../types/adminType";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { loginAdminMock } from "../../types/mock";
import styled from "styled-components";
import { styles } from "../../utils/Constants";
import Input from "../../components/input/Input";
import { BotaoSubmit } from "../../components/button/Button";

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100dvw;
    height: 100dvh;
    background-color: ${styles.azul_3E};
`;

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-self: center;
    width: 22rem;
    height: fit-content;
    background-color: white;
    border: 4px solid ${styles.verde_83};
    border-radius: ${styles.borderRadius};
    padding: 2rem;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const TituloEntrar = styled.span`
    font-family: 'Lato';
    font-size: 1.3rem;
    font-weight: 700;
`;

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
                const error = e as AxiosError;

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

    return <LoginContainer>
        <LoginFormContainer>
            <TituloEntrar>Entrar como administrador</TituloEntrar>

            <LoginForm onSubmit={e => {
                e.preventDefault();
                fazerLogin();
            }}>
                <Input.Texto
                    label="Insira seu usuário"
                    placeholder="Usuário"
                    onInput={(valor) => alterarCredenciais('login', valor.currentTarget.value)}
                />
                <Input.Senha
                    label="Insira sua senha"
                    placeholder="Senha"
                    onInput={(valor) => alterarCredenciais('senha', valor.currentTarget.value)}
                />
                <BotaoSubmit>Avançar</BotaoSubmit>
            </LoginForm>
        </LoginFormContainer>
    </ LoginContainer>
}

export default Login;