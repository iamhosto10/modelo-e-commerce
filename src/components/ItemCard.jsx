import React from "react";
import { Link } from "react-router-dom"; //importo link para enviarlo directamente al otro link

//esta funcion da una imagen mas estetica a cada producto

function ItemCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`}>
      <div className="w-[350px] h-[350px] flex flex-col grow justify-center items-center shadow-2xl rounded-xl border-slate-300 border-2 hover:scale-105">
        <img
          src={product.images[0]}
          alt={product.name}
          className="max-w-full h-auto"
        />
        <h3 className="font-bold">{product.name}</h3>
        <p>
          {product.prices.unit_amount}
          {product.prices.currency}
        </p>
      </div>
    </Link>
  );
}

export default ItemCard;
