import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import "./index.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <header className="topbar">
        <h1>Catálogo </h1>
        <div className="badge">Carrito: {cartCount}</div>
      </header>

      <main className="container">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={() => setCartCount(cartCount + 1)}
          />
        ))}
      </main>
    </div>
  );
}
