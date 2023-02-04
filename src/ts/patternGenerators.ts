function getNumberInputs() {
  return (
    [...document.querySelectorAll("input[type=number]")] as HTMLInputElement[]
  ).reduce((acc, obj) => ({ ...acc, [obj.name]: +obj.value }), {});
}

/**
 * Turns any number into an 1/8th inch precision string with fractions
 * @param number
 * @returns
 */
function roundToEighthInch(number: number) {
  const fractions = ["1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];

  const rounded = Math.abs(Math.round(number * 8) / 8);
  const int = Math.floor(rounded);
  const decimal = rounded - int;

  const fractionalString =
    decimal !== 0 ? " " + fractions[decimal * 8 - 1] : "";
  return (
    `${number < 0 ? "-" : ""}${int !== 0 ? int : ""}${fractionalString}` || "0"
  );
}

/***
 * Sets each object entry to the html element with a classname matching the key.
 * Formats the value for imperial/metric
 *
 * @param isMetric
 * @param obj  Values to set
 */
function setCalculatedValues(isMetric: boolean, obj: Record<string, number>) {
  for (let [name, value] of Object.entries(obj)) {
    let stringValue = isMetric
      ? value.toFixed(1) + " cm"
      : roundToEighthInch(value) + " in";

    document
      .querySelectorAll("." + name)
      .forEach((obj) => (obj.innerHTML = stringValue));
  }
}

function getIsMetric() {
  return (
    (
      document.querySelector(
        "input[type=radio][name=units]:checked"
      ) as HTMLInputElement
    )?.value === "1"
  ); // inches (val=0) or cm (val=1)
}

export function init(
  fn: (
    isMetric: boolean,
    fieldValues: any
  ) => Record<string, number> | undefined
) {
  document.querySelectorAll("input").forEach((obj) =>
    obj.addEventListener("input", () => {
      const isMetric = getIsMetric();
      const calculatedValues = fn(isMetric, getNumberInputs());
      if (!calculatedValues) return;

      setCalculatedValues(isMetric, calculatedValues);
    })
  );
}
