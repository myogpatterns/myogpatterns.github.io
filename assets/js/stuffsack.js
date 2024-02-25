/*
    Stuff Sack Calculator. 2020.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for round bottom stuff sack
*/
calculatorSetup(function () {
  let isMetric = getIsMetric();
  let fields = ['#diameter', '#height'].map(getNumberFromField);

  if (fields.some(field => field <= 0)) {
    return;
  }
  let [diameter, height] = fields;

  const { channelSa, sA, cordLengthAdded } = isMetric ?
    { channelSa: 4, sA: 1, cordLengthAdded: 15 } :
    { channelSa: 1.5, sA: 0.375, cordLengthAdded: 6 };

  let patternDiameter = diameter + (2 * sA);
  let patternWidth = (Math.PI * diameter) + (2 * sA);

  let outputFields = {
    patternDiameter,
    patternRadius: (patternDiameter) / 2,
    patternWidth,
    sA,
    patternHeight: height + sA + (0.5 * diameter) + channelSa,
    cordLength: patternWidth + cordLengthAdded,
  };

  setCalculatedValues(isMetric, outputFields);
}, 'v0.2');