import { NavLink } from "react-router-dom";
import "./collection-cards.css";

const Cards = ({ image, title, sub_title, price, id }) => {
  return (
    <NavLink
      to={`/task/${id}`} // Dynamic route with ID
      state={{ image, title, sub_title, price, id }} // Passing the entire card data
    >
      <div className="card">
        <div
          className="card-image"
          style={{
            background: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="card-title">{title}</div>
        <div className="card-sub">{sub_title}</div>
        <div className="card-price">₹{price}</div>
        <div className="card-id">{id}</div>
      </div>
    </NavLink>
  );
};

export default Cards;
