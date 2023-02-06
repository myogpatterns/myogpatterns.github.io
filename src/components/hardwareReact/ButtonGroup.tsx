import type { ProductFilter, ButtonGroup } from "./types";

export default function ButtonGroup({
  filter,
  updateFilter,
  buttonGroup: { key, values, allLabel },
}: {
  filter: ProductFilter;
  updateFilter: (newFilter: ProductFilter) => unknown;
  buttonGroup: ButtonGroup;
}) {
  return (
    <div className="button-group">
      <button
        onClick={() => updateFilter(null)}
        className={!filter ? "primary" : ""}
      >
        {allLabel ?? "Any"}
      </button>

      {values.map((temp) => {
        const { value, label } =
          typeof temp === "string" ? { value: temp, label: temp } : temp;
        return (
          <button
            key={value}
            onClick={() => updateFilter({ key, value })}
            className={filter?.value === value ? "primary" : ""}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
