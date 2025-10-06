import type { Reclamacao } from "../tipos/reclamacao";
import ItemReclamacao from "./itemReclamacao";

type Props = {
    reclamacoes: Reclamacao[];
};

const ListaReclamacoes = ({ reclamacoes }: Props) => {
    if (reclamacoes.length === 0) {
        return <p>Nenhuma reclamação foi registrada.</p>;
    }

    return (
        <section>
            {reclamacoes.map((item) => (
                <ItemReclamacao key={item._id} reclamacao={item} />
            ))}
        </section>
    );
};

export default ListaReclamacoes;
