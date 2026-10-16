import { useState } from "react";
import { MapPin, Clock, Star, X } from "lucide-react";
import { Rating } from "react-simple-star-rating";

const gradients = [
  "linear-gradient(135deg,#0077b6,#00b4d8)",
  "linear-gradient(135deg,#ff7b54,#ffb26b)",
  "linear-gradient(135deg,#5f0f40,#9a031e)",
  "linear-gradient(135deg,#1b4332,#52b788)",
];

export default function DestinationCard({ destination, onDelete }) {
  const { id, title, country, description, price, days, rating, image, isNew } = destination;
  const [imgError, setImgError] = useState(!image);

  return (
    <article className="dest-card">
      <div className="dest-img">
        {imgError ? (
          <div className="dest-fallback" style={{ background: gradients[id % gradients.length] }}>
            {title}
          </div>
        ) : (
          <img src={image} alt={title} loading="lazy" onError={() => setImgError(true)} />
        )}
        {(rating >= 4.8 || isNew) && (
          <span className={`tag ${isNew ? "tag-new" : ""}`}>{isNew ? "Nouveau" : "Populaire"}</span>
        )}
        <span className="rating-pill"><Star size={14} fill="currentColor" /> {rating}</span>
      </div>

      <div className="dest-body">
        <h3>{title}</h3>
        <p className="dest-country"><MapPin size={14} /> {country}</p>
        <p className="dest-desc">{description}</p>

        <Rating initialValue={rating} readonly allowFraction size={18} SVGstyle={{ display: "inline" }} />

        <div className="dest-footer">
          <span className="dest-days"><Clock size={15} /> {days} jours</span>
          <span className="dest-price">
            <small>dès</small> ${price}<small>/nuit</small>
          </span>
        </div>

        <div className="dest-actions">
          <button className="btn-explore">Explorer</button>
          {isNew && (
            <button className="btn-remove" onClick={() => onDelete(id)} aria-label={`Retirer ${title}`}>
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
