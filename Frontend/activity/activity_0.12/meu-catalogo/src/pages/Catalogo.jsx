import React, { useEffect, useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';

const API_URL = 'https://crudcrud.com/api/8bfd91e8118b4d5995bb46a34f372eb8/produto';

const Catalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    preco: '',
    imagem: '',
    descricao: ''
  });

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProdutos();
  }, []);

  const handleChange = (e) => {
    setNovoProduto({ ...novoProduto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, preco, descricao } = novoProduto;

    if (!nome || !preco || !descricao) {
      alert('Preencha nome, preço e descrição!');
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoProduto)
      });

      if (res.ok) {
        const novo = await res.json();
        setProdutos([...produtos, novo]);
        setNovoProduto({ nome: '', preco: '', imagem: '', descricao: '' });
      } else {
        alert('Erro ao adicionar produto.');
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  const handleRemover = async (id) => {
    const confirmar = window.confirm('Tem certeza que deseja remover este produto?');
    if (!confirmar) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProdutos(produtos.filter(prod => prod._id !== id));
      } else {
        alert('Erro ao remover produto.');
      }
    } catch (error) {
      console.error('Erro ao remover produto:', error);
    }
  };

  return (
    <div className="container">
      <h2>Catálogo de Produtos</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem"
          value={novoProduto.imagem}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar Produto</button>
      </form>

      <div className="lista-produtos">
        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado.</p>
        ) : (
          produtos.map(prod => (
            <ProdutoCard key={prod._id} {...prod} onRemover={handleRemover} />
          ))
        )}
      </div>
    </div>
  );
};

export default Catalogo;
