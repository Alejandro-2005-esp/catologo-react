import { useState } from "react";
import Reviews from "./Reviews";

type Review = {
  usuario: string;
  texto: string;
  fecha: string;
};

type Product = {
  id: number | string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  reseñas: Review[];
};

type ProductCardProps = {
  product: Product;
  onAddToCart: () => void;
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAddToCart();
  };

  return (
    <article className="product-card">
      <img src={product.imagen} alt={product.nombre} className="product-img" />
      <div className="card-body">
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <div className="price">${product.precio.toFixed(2)}</div>

        <div className="row">
          <button
            className={`btn ${added ? "btn-success" : "btn-accent"}`}
            onClick={handleAdd}
            disabled={added}
          >
            {added ? "Agregado ✅" : "Agregar al Carrito"}
          </button>

          {product.reseñas.length > 0 && (
            <button
              className="btn btn-ghost"
              onClick={() => setShowReviews(!showReviews)}
            >
              {showReviews
                ? "Ocultar reseñas"
                : `Ver reseñas (${product.reseñas.length})`}
            </button>
          )}
        </div>

        {showReviews && <Reviews reseñas={product.reseñas} />}
      </div>
    </article>
  );
}