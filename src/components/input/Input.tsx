import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { styles } from "../../utils/Constants";

type Props = {
    placeholder: string,
    label: string,
    onInput: (e: React.FormEvent<HTMLInputElement>) => void,
    type?: HTMLInputTypeAttribute
}

const InputContainer = styled.div`
    width: 100%;
`;

const InputLabel = styled.label`
    font-size: 1rem;
`;

const InputTexto = styled.input`
    border-radius: ${styles.borderRadius};
    border: 1px solid ${styles.azul_7E};
    padding: .6rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
`;

const Texto: React.FC<Props> = ({ placeholder, label, onInput, type }) => {
    return <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputTexto onInput={e => onInput(e)}
            id={label}
            placeholder={placeholder}
            type={type}
        />
    </InputContainer>
}

const Senha: React.FC<Props> = ({ placeholder, label, onInput }) => {
    return <Texto
        placeholder={placeholder}
        label={label}
        onInput={e => onInput(e)}
        type="password"
    />
}

export default {
    Texto,
    Senha
}