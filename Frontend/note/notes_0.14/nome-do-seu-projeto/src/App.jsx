import { useState } from "react";

const API_URL = 'https://crudcrud.com/api/8bfd91e8118b4d5995bb46a34f372eb8/payments';

function App() {
  const infoPagamento = {
    valor: 42.00,
    cpf: '123.456.789-00',
    metodos: 'PIX',
    chavepix: 'cpf',
    qrCode: null,
    status: null
  };

  const [pagamento, setPagamento] = useState(infoPagamento);

  const efetuarPagamento = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pagamento)
    })
      .then(res => res.json())
      .then(pagamentoCriado => {
        setPagamento({
          ...pagamento,
          idPagamento: pagamentoCriado._id,
          qrCode: 'https://miro.medium.com/v2/resize:fit:640/0*zPG9dqz508rmRR70',
          status: 'CRIADO'
        });
      })
      .catch(error => {
        console.error('Erro ao criar pagamento', error);
      });
  };

  return (
    <div>
      <button onClick={efetuarPagamento}>Pagar com PIX</button>
      <br />
      {pagamento.status && (
        <img width="120" src={pagamento.qrCode} alt="QR Code do pagamento PIX" />
      )}
    </div>
  );
}

export default App;
