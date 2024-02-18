import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Link } from "react-router-dom";

const CategoryPriview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPriview;
