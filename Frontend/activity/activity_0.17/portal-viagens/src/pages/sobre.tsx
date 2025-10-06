import { Layout } from '../components/Layout';
import styles from '../styles/Sobre.module.css';

export default function Sobre() {
  return (
    <Layout>
      <section className={styles.sobre}>
        <h1>Sobre o Portal Viagens</h1>
        <p>
          Somos um portal dedicado a ajudar você a encontrar as melhores promoções e pacotes de viagem.
          Nossa missão é tornar suas férias inesquecíveis com segurança, conforto e preço justo.
        </p>

        <h2>Nossa História</h2>
        <p>
          Fundado em 2023, o Portal Viagens já ajudou milhares de pessoas a explorar o mundo, oferecendo
          atendimento de qualidade e pacotes exclusivos com as melhores operadoras.
        </p>

        <h2>Equipe</h2>
        <p>
          Contamos com uma equipe apaixonada por viagens, que está sempre disponível para tirar suas dúvidas e
          ajudar a planejar sua próxima aventura.
        </p>
      </section>
    </Layout>
  );
}
