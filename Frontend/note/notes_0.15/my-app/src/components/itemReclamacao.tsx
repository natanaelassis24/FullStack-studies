import type { Reclamacao } from "../tipos/reclamacao";

type Props = {
    reclamacao: Reclamacao;
};

const ItemReclamacao = ({ reclamacao }: Props) => {
    return (
        <article>
            <h3>{reclamacao.nome}</h3>
            <p>{reclamacao.mensagem}</p>
        </article>
    );
};

export default ItemReclamacao;
