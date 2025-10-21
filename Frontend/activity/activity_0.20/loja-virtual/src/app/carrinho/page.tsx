"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function CarrinhoPage() {
  const { cart, total, removeFromCart, clearCart } = useCart();
  const [showQR, setShowQR] = useState(false);

  const handleCheckout = () => {
    setShowQR(true);
  };

  const qrData = `Pagamento de R$ ${total.toFixed(2)} para Loja Virtual`;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center gap-4 border-b pb-4">
                <Image src={item.image} alt={item.title} width={80} height={60} />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Qtd: {item.quantity}</p>
                  <p className="text-green-600">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="text-red-600 hover:underline"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="text-xl font-bold">Total: R$ {total.toFixed(2)}</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => clearCart()}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Limpar carrinho
              </button>

              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Finalizar Compra
              </button>
            </div>

            {showQR && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Escaneie para pagar:</h2>
                <QRCode value={qrData} />
                <p className="mt-2 text-sm text-gray-600">{qrData}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
