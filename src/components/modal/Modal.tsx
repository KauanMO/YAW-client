import React from "react";
import Modal from 'react-modal';
import styled from "styled-components";

type Props = {
    isOpen: boolean | undefined,
    onClose: () => void,
    children: React.ReactNode
}

const BotaoFechar = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    user-select: none;
`;

const ContainerModal = styled.div`
    position: relative;
    height: fit-content;
    width: 35dvw;
    background-color: white;
    height: fit-content;
    align-self: center;
    padding: 1rem;
`;

export const ModalRegistro: React.FC<Props> = ({ isOpen, onClose, children }) => {
    return <Modal
        isOpen={isOpen ?? false}
        onRequestClose={onClose}
        style={{
            overlay: {
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            content: {
                inset: "auto",
                padding: "0",
                border: "none",
                background: "none",
            },
        }}
    >
        <ContainerModal>
            <BotaoFechar onClick={onClose}>X</BotaoFechar>
            {children}
        </ContainerModal>
    </Modal>
}