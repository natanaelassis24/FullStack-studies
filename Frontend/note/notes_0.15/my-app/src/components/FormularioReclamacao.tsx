import React, { useState } from 'react';
import type { Reclamacao } from '../tipos/reclamacao';
import styles from './FormularioReclamacao.module.css';

type Props = {
    aoEnviar: (reclamacao: Reclamacao) => void;
}

const FormularioReclamacao = ({ aoEnviar }: Props) => {
    const [nome, setName] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();

        if (!nome.trim() || !mensagem.trim()) return;

        aoEnviar({ _id: Date.now(), nome, mensagem });
        setName('');
        setMensagem('');
    }

    return (
        <form className={styles.formulario} onSubmit={enviar}>
            <h2>Registrar Reclamação</h2>
            <input
                className={styles.input}
                type="text"
                placeholder="Nome da empresa"
                value={nome}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                className={styles.input}
                placeholder="Descreva sua reclamação"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormularioReclamacao;
