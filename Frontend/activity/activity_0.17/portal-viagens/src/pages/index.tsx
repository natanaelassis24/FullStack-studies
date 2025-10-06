import { Layout } from '../components/Layout';
import { destinos } from '../data/destinos';
import { CardDestino } from '../components/CardDestino';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <section id="home" className={styles.hero}>
        <h1>Explore o mundo com os melhores pacotes</h1>
        <p>Oferecemos as melhores promoções para suas férias inesquecíveis.</p>
        <button className={styles.cta}>Ver pacotes</button>
      </section>

      <section id="destinos" className={styles.pacotes}>
        <h2>Pacotes em Destaque</h2>
        <div className={styles.cardsContainer}>
          {destinos.map((destino) => (
            <CardDestino
              key={destino.id}
              nome={destino.nome}
              imagem={destino.imagem}
              dataPartida={destino.dataPartida}
              preco={destino.preco}
            />
          ))}
        </div>
      </section>

      <section id="sobre" className={styles.beneficios}>
        <h2>Por que escolher nosso portal?</h2>
        <div className={styles.beneficiosGrid}>
          <div>
            <strong>💰 Melhores preços</strong>
            <p>Descontos exclusivos que cabem no seu bolso.</p>
          </div>
          <div>
            <strong>🕑 Suporte 24 horas</strong>
            <p>Estamos sempre disponíveis para você.</p>
          </div>
          <div>
            <strong>🛡️ Viagens seguras</strong>
            <p>Parcerias com as melhores operadoras.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
