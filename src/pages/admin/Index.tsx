import React, { useEffect, useState } from "react";
import { Pedido, RegistroPedido } from "../../types/pedidoType";
import { buscarPedidos, cadastrarPedido } from "../../api/pedido";
import { buscarConvidados, cadastrarConvidado } from "../../api/convidado";
import { Convidado, RegistroConvidado } from "../../types/convidadoType";
import { convidadosMock, pedidosMock } from "../../types/mock";
import { BotaoRegistro, BotaoSubmit } from "../../components/button/Button";
import styled from "styled-components";
import { ModalRegistro } from "../../components/modal/Modal";

enum OpcaoModal {
    RegistrarPedidos,
    RegistrarConvidados
}

// STYLED-COMPONENTS
const TituloLista = styled.div`
    display: flex;
    gap: 1rem;
`;

const FormularioRegistro = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
`;

export default function Admin() {
    // MODAIS
    const ModalRegistroPedidosAberto: React.FC = () => {
        const [infoNovoPedido, setInfoNovoPedido] = useState<RegistroPedido>({
            foto: '',
            link: '',
            preco: 0,
            titulo: ''
        });

        const alterarInfoNovoPedido = (info: string, valor: string) =>
            setInfoNovoPedido({
                ...infoNovoPedido,
                [info]: valor
            });

        const cadastrarPedidoRequest = async () => {
            try {
                const resposta = await cadastrarPedido(infoNovoPedido);

                setPedidos(prev => [...prev, resposta.data]);
            } catch (e) {
                console.error(e);
            }
        }

        return <ModalRegistro onClose={fecharModais} isOpen={modaisAbertos.get(OpcaoModal.RegistrarPedidos)}>
            <h1>Registrar pedido</h1>

            <FormularioRegistro onSubmit={e => {
                e.preventDefault();
                cadastrarPedidoRequest();
            }}>
                <input onInput={valor => alterarInfoNovoPedido('titulo', valor.currentTarget.value)}
                    value={infoNovoPedido.titulo}
                    placeholder="título" />

                <input onInput={valor => alterarInfoNovoPedido('link', valor.currentTarget.value)}
                    value={infoNovoPedido.link}
                    placeholder="link" />

                <input onInput={valor => alterarInfoNovoPedido('foto', valor.currentTarget.value)}
                    value={infoNovoPedido.foto}
                    placeholder="foto" />

                <input onInput={valor => alterarInfoNovoPedido('preco', valor.currentTarget.value)}
                    value={infoNovoPedido.preco}
                    placeholder="preço" />

                <BotaoSubmit>Enviar</BotaoSubmit>
            </FormularioRegistro>
        </ModalRegistro>
    }

    const ModalRegistroConvidadosAberto: React.FC = () => {
        const [infoNovoConvidado, setInfoNovoConvidado] = useState<RegistroConvidado>({
            nome: '',
            numero: ''
        });

        const alterarInfoNovoConvidado = (info: string, valor: string) =>
            setInfoNovoConvidado({
                ...infoNovoConvidado,
                [info]: valor
            });

        const cadastrarConvidadoRequest = async () => {
            try {
                const resposta = await cadastrarConvidado(infoNovoConvidado);

                setConvidados(prev => [...prev, resposta.data]);
            } catch (e) {
                console.error(e);
            }
        }

        return <ModalRegistro onClose={fecharModais} isOpen={modaisAbertos.get(OpcaoModal.RegistrarConvidados)}>
            <h1>Registrar convidado</h1>

            <FormularioRegistro onSubmit={e => {
                e.preventDefault();
                cadastrarConvidadoRequest();
            }}>
                <input onInput={valor => alterarInfoNovoConvidado('nome', valor.currentTarget.value)}
                    value={infoNovoConvidado.nome}
                    placeholder="nome" />

                <input onInput={valor => alterarInfoNovoConvidado('numero', valor.currentTarget.value)}
                    value={infoNovoConvidado.numero}
                    placeholder="numero" />
                <BotaoSubmit>Enviar</BotaoSubmit>
            </FormularioRegistro>
        </ModalRegistro>
    }

    // STATES
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [convidados, setConvidados] = useState<Convidado[]>([]);
    const [modaisAbertos, setModaisAbertos] = useState<Map<OpcaoModal, boolean>>(
        new Map<OpcaoModal, boolean>([
            [OpcaoModal.RegistrarPedidos, false],
            [OpcaoModal.RegistrarConvidados, false]
        ])
    );

    // EFFECT
    useEffect(() => {
        const buscarPedidosRequest = async () => {
            try {
                const resposta = await buscarPedidos();

                if (resposta.status === 200)
                    setPedidos(resposta.data);
            } catch (e) {
                if (process.env.REACT_APP_AMBIENTE == 'dev')
                    setPedidos(pedidosMock);
                else {
                    console.error(e);
                }
            }
        }

        const buscarConvidadosRequest = async () => {
            try {
                const resposta = await buscarConvidados();

                if (resposta.status === 200)
                    setConvidados(resposta.data);
            } catch (e) {
                if (process.env.REACT_APP_AMBIENTE == 'dev')
                    setConvidados(convidadosMock);
                else {
                    console.error(e);
                }
            }
        }

        buscarPedidosRequest();
        buscarConvidadosRequest();
    }, []);

    // FUNCOES
    const abrirModal = (modal: OpcaoModal) =>
        setModaisAbertos(prev => new Map(prev).set(modal, true));

    const fecharModais = () =>
        setModaisAbertos(new Map<OpcaoModal, boolean>([
            [OpcaoModal.RegistrarPedidos, false],
            [OpcaoModal.RegistrarConvidados, false]
        ]));

    // RETURN
    return <>
        <ModalRegistroPedidosAberto />
        <ModalRegistroConvidadosAberto />

        <h1>Admin</h1>

        <TituloLista>
            <h3>Pedidos</h3>

            <BotaoRegistro onClick={() => abrirModal(OpcaoModal.RegistrarPedidos)} />
        </TituloLista>

        <ul>
            {
                pedidos && pedidos.map(pedido => {
                    return <li key={pedido.id}>
                        {pedido.titulo}
                    </li>
                })
            }
        </ul>

        <TituloLista>
            <h3>Convidados</h3>

            <BotaoRegistro onClick={() => abrirModal(OpcaoModal.RegistrarConvidados)} />
        </TituloLista>
        <ul>
            {
                convidados && convidados.map(convidado => {
                    return <li key={convidado.id}>
                        {convidado.nome} ({convidado.numero})
                    </li>
                })
            }
        </ul>
    </>
}