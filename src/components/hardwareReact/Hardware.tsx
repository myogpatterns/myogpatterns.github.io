import { useEffect, useState } from "react";
import Product from "./Product";
import Filters from "./Filters";
import type { ProductFilter, Product as ProductType } from "./types";

//globally applies css
import "./hardware.css";

export function Hardware() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const res = await fetch("/data/allProducts.json");
    setProducts(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [filters, setFilters] = useState<ProductFilter[]>([]);

  const filteredProducts = products.filter((product) =>
    filters.every((filter) => {
      if (!filter) return true;
      const { key, value } = filter;
      return product[key]?.toString().includes(value);
    })
  );

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />

      {filteredProducts.length === 0 ? (
        <div>{loading ? "Loading ..." : "No Products Match"}</div>
      ) : (
        <div id="card-shelf">
          {filteredProducts.map((product) => (
            <Product product={product} key={product.id + product.vendor} />
          ))}
        </div>
      )}
    </>
  );
}
