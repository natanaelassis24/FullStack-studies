import React from 'react';
import '../App.css';

const ProdutoCard = ({ _id, nome, preco, imagem, descricao, onRemover }) => {
  return (
    <div className="produto-card">
      {imagem && (
        <img
          src={imagem}
          alt={nome}
          onError={(e) => e.target.style.display = 'none'}
        />
      )}
      <h3>{nome}</h3>
      <p className="preco">R$ {preco}</p>
      <p className="descricao">{descricao}</p>

      <button className="btn-remover" onClick={() => onRemover(_id)}>
        Remover
      </button>
    </div>
  );
};

export default ProdutoCard;
