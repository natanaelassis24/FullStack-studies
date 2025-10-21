import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Confira nossos produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
