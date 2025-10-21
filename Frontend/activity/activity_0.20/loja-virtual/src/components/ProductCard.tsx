"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

type ProductProps = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <Image
        src={image}
        alt={title}
        width={300}
        height={160}
        className="mb-4 rounded object-cover"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-green-600 font-bold mt-2">R$ {price.toFixed(2)}</p>
      <button
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => addToCart({ title, price, image })}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
