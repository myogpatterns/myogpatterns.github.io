<script lang="ts">
  import { onMount } from "svelte";
  import ButtonGroup from "./ButtonGroup.svelte";
  import type { ButtonGroup as ButtonGroupType, ProductFilter } from "./types";

  const ButtonGroups: ButtonGroupType[] = [
    {
      key: "vendor",
      allLabel: "All",
      values: [
        "Ripstop by the Roll",
        "Mozet Supplies",
        "adventurexpert",
        "Quest Outfitters",
      ],
    },
    {
      name: "material",
      key: "product_type",
      values: ["plastic", "metal"],
    },
    {
      key: "product_type",
      values: [
        ...["buckle", "sternum", "cord", "hook", "ring"].map((value) => ({
          value,
          label: value + "s",
        })),
        "misc",
      ],
    },
  ];

  export let filters: ProductFilter[];

  onMount(() => {
    //load filters from url
    var searchParams = new URLSearchParams(window.location.search);
    filters = ButtonGroups.map((buttonGroup) => {
      const nameOrKey = buttonGroup.name ?? buttonGroup.key;
      const value = searchParams.get(nameOrKey);
      return !value ? null : { key: buttonGroup.key, value };
    });
  });

  function onClick(
    newFilter: ProductFilter,
    buttonGroup: ButtonGroupType,
    i: number
  ) {
    filters[i] = newFilter;

    const nameOrKey = buttonGroup.name ?? buttonGroup.key;
    updateURL(nameOrKey, newFilter?.value);
  }

  function updateURL(name: string, value?: string) {
    var searchParams = new URLSearchParams(window.location.search);
    if (!value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }

    var newRelativePathQuery =
      window.location.pathname + "?" + searchParams.toString();
    history.pushState(null, "", newRelativePathQuery);
  }
</script>

<div>
  {#each ButtonGroups as buttonGroup, i}
    <ButtonGroup
      {buttonGroup}
      filter={filters[i]}
      on:click={({ detail: filter }) => onClick(filter, buttonGroup, i)}
    />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
