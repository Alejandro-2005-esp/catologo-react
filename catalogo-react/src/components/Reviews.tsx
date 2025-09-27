type Review = {
  usuario: string;
  texto: string;
  fecha: string;
};

type ReviewsProps = {
  reseñas: Review[];
};

export default function Reviews({ reseñas }: ReviewsProps) {
  return (
    <div className="reviews">
      {reseñas.map((r, i) => (
        <div key={i} className="review-item">
          <div className="review-user">{r.usuario}</div>
          <div className="review-text">{r.texto}</div>
          <div className="review-date">{r.fecha}</div>
        </div>
      ))}
    </div>
  );
}