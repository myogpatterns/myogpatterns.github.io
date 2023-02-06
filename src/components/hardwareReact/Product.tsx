import type { Product } from "./types";

function truncateString(str: string, num = 30) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

export default function Product({ product }: { product: Product }) {
  return (
    <div className="card">
      <img src={product.productImg} loading="lazy" alt="product" />
      <div className="card-info">
        <p className="title">{truncateString(product.title)}</p>
        <div className="details">
          <p className="option">{product.productSizes}</p>
          <p className="vendor">
            <a
              href={product.url}
              target="_blank"
              rel="noreferrer"
              title="product url"
            >
              <img
                src={"/images/shared/partners/48/" + product.vendorImg}
                alt="vendor logo"
                loading="lazy"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
