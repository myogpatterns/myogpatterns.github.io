<script lang="ts">
  import type { ProductFilter, ButtonGroup } from "./types";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ click: ProductFilter }>();

  export let filter: ProductFilter;
  export let buttonGroup: ButtonGroup;

  let { key, values, allLabel } = buttonGroup;
</script>

<div>
  <button on:click={() => dispatch("click", null)} class:primary={!filter}>
    {allLabel ?? "Any"}
  </button>

  {#each values as temp}
    <!-- If the value is a string use it as both the value and label -->
    {@const { value, label } =
      typeof temp === "string" ? { value: temp, label: temp } : temp}

    <button
      on:click={() => dispatch("click", { key, value })}
      class:primary={filter?.value === value}
    >
      {label}
    </button>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
  }

  button {
    border-radius: 0;
    padding: 0 2em;
    letter-spacing: normal;
  }

  button:first-child {
    border-radius: 3.75em 0 0 3.75em;
  }

  button:last-child {
    border-radius: 0 3.75em 3.75em 0;
  }

  @media screen and (max-width: 900px) {
    button {
      padding: 0 1.5em;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      margin: 0.125rem;
      padding: 0 1rem;
    }

    button:first-child {
      border-radius: 0;
    }
    button:last-child {
      border-radius: 0;
    }
  }
</style>
