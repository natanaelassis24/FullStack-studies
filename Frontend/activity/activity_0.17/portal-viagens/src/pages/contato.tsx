import { Layout } from '../components/Layout';
import styles from '../styles/Contato.module.css';
import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Obrigado pela mensagem, ${formData.nome}!`);
    setFormData({ nome: '', email: '', mensagem: '' });
  }

  return (
    <Layout>
      <section className={styles.contato}>
        <h1>Contato</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={5}
            required
          />

          <button type="submit" className={styles.botaoEnviar}>Enviar</button>
        </form>

        <div className={styles.mapaContainer}>
          <h2>Nosso Escritório</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086172466305!2d-46.65677978468248!3d-23.564224768791698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c96b6c7f9f%3A0xb9e0fbdc3d3e29af!2sAv.%20Paulista%2C%201576%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1696070400000!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Escritório"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
