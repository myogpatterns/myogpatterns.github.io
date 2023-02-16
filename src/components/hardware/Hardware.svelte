<script lang="ts">
  import { onMount } from "svelte";
  import Filters from "./Filters.svelte";
  import Product from "./Product.svelte";
  import type { ProductFilter, Product as ProductType } from "./types";

  let products: ProductType[] = [];
  let loading = true;

  onMount(async () => {
    const res = await fetch("/data/allProducts.json");
    products = await res.json();
    loading = false;
  });

  let filters: ProductFilter[] = [];

  $: filteredProducts = products.filter((product) =>
    filters.every((filter) => {
      if (!filter) return true;
      const { key, value } = filter;
      return product[key]?.toString().includes(value);
    })
  );
</script>

<Filters bind:filters />

{#if filteredProducts.length === 0}
  <div>{loading ? "Loading ..." : "No Products Match"}</div>
{:else}
  <div id="card-shelf">
    {#each filteredProducts as product (product.id + product.vendor)}
      <Product {product} />
    {/each}
  </div>
{/if}

<style>
  #card-shelf {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 20%));
    grid-gap: 0px;
  }

  @media screen and (max-width: 480px) {
    #card-shelf {
      grid-template-columns: repeat(auto-fit, minmax(120px, 50%));
    }
  }

  div {
    padding-bottom: 2rem;
    padding-top: 4rem;
  }
</style>
