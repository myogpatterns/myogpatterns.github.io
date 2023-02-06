import type { ButtonGroup as ButtonGroupType, ProductFilter } from "./types";
import ButtonGroup from "./ButtonGroup";
import { useEffect } from "react";

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

const buttonGroups: ButtonGroupType[] = [
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

export default function Filters({
  filters,
  setFilters,
}: {
  filters: ProductFilter[];
  setFilters: React.Dispatch<React.SetStateAction<ProductFilter[]>>;
}) {
  function onClick(
    newFilter: ProductFilter,
    buttonGroup: ButtonGroupType,
    i: number
  ) {
    const newFilters = [...filters];
    newFilters[i] = newFilter;
    setFilters(newFilters);

    const nameOrKey = buttonGroup.name ?? buttonGroup.key;
    updateURL(nameOrKey, newFilter?.value);
  }

  useEffect(() => {
    var searchParams = new URLSearchParams(window.location.search);
    setFilters(
      buttonGroups.map((buttonGroup) => {
        const nameOrKey = buttonGroup.name ?? buttonGroup.key;
        const value = searchParams.get(nameOrKey);
        return !value ? null : { key: buttonGroup.key, value };
      })
    );
  }, [setFilters]);

  return (
    <div className="ui-group">
      {buttonGroups.map((buttonGroup, i) => (
        <ButtonGroup
          key={i}
          filter={filters[i]}
          buttonGroup={buttonGroup}
          updateFilter={(newFilter: ProductFilter) =>
            onClick(newFilter, buttonGroup, i)
          }
        />
      ))}
    </div>
  );
}
