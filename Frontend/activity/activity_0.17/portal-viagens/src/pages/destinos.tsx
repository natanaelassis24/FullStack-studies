// src/pages/destinos.tsx
import { Layout } from '../components/Layout';
import { destinos } from '../data/destinos';
import { CardDestino } from '../components/CardDestino';

export default function DestinosPage() {
  return (
    <Layout>
      <h1>Destinos Turísticos</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem',
      }}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
            descricao={destino.descricao}
          />
        ))}
      </div>
    </Layout>
  );
}
