/*
    Stuff Sack Calculator. 2020.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for round bottom stuff sack
*/
calculatorSetup(function () {
  let isMetric = getIsMetric()
  let fields = ['#diameter', '#height'].map(getNumberFromField)

  if (fields.some(field => field <= 0)) {
    return
  }
  let [diameter, height] = fields

  const { channelSa, generalSa } = isMetric ?
    { channelSa: 4, generalSa: 1 } :
    { channelSa: 1.5, generalSa: 0.375 }

  let patternDiameter = diameter + (2 * generalSa)

  let outputFields = {
    patternDiameter,
    patternRadius: (patternDiameter) / 2,
    patternWidth: (Math.PI * diameter) + (2 * generalSa),
    patternHeight: height + generalSa + (0.5 * diameter) + channelSa,
  }

  setCalculatedValues(isMetric, outputFields)
}, 'v0.2')