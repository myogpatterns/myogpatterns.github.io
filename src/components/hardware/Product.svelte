<script lang="ts">
  import type { Product } from "./types";

  export let product: Product;

  function truncateString(str: string, num = 30) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
</script>

<div class="card">
  <img src={product.productImg} loading="lazy" alt="product" />
  <div class="card-info">
    <p class="title">{truncateString(product.title)}</p>
    <div class="details">
      <p class="option">{product.productSizes}</p>
      <p class="vendor">
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

<style>
  .card {
    display: grid;
    background: white;
    border: 0.1px solid lightslategray;
    text-align: left;
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  p {
    margin: 0;
  }

  .card-info {
    display: grid;
    align-content: space-between;
    padding: 0 0.5rem;
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }

  .vendor {
    color: #667788;
  }

  .option {
    font-size: 0.8rem;
  }

  .vendor img {
    margin: 8px;
    width: 40px;
    aspect-ratio: 1 / 1;
    border-radius: 20px;
  }
</style>
