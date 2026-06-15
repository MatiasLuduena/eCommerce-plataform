import { useState } from "react";

import { Link, useParams } from "react-router-dom";

// data
import { data } from "../../data";

const Catalog = () => {
  const { category } = useParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [search, setSearch] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>filter</p>
      <label>
        <input
          type="checkbox"
          value="pants"
          onChange={() => handleCategoryChange("pants")}
        />
        Pants
      </label>
      <label>
        <input
          type="checkbox"
          value="hoodies"
          onChange={() => handleCategoryChange("hoodies")}
        />
        Hoodies
      </label>
      <label>
        <input
          type="checkbox"
          value="shirts"
          onChange={() => handleCategoryChange("shirts")}
        />
        Shirts
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <br />
      <p>products {category} list</p>
      {data.products
        .filter((product) => {
          const categoryMatch = product.categories[1] === category;

          const selectedCategoryMatch =
            selectedCategories.length === 0 ||
            product.categories.some((cat) => selectedCategories.includes(cat));

          const priceMatch = product.price <= maxPrice;

          const searchMatch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

          return (
            categoryMatch && selectedCategoryMatch && priceMatch && searchMatch
          );
        })
        .map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <p>{product.name}</p>
            <p>${product.price}</p>
          </Link>
        ))}
    </div>
  );
};

export default Catalog;
