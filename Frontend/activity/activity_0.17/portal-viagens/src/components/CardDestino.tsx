import styles from '../styles/CardDestino.module.css';

interface CardDestinoProps {
  nome: string;
  imagem: string;
  descricao: string;
}

export function CardDestino({ nome, imagem, descricao }: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
}
