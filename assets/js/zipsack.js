/*
    Zip Pouch Calculator. 2020.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for rectangular zip sack
*/

calculatorSetup(function () {
  let isMetric = getIsMetric()
  let fields = ['#width', '#height', '#length'].map(getNumberFromField)

  if (fields.some(field => field <= 0)) {
    return
  }
  let [width, height, length] = fields

  const { channelSa, generalSa } = isMetric ?
    { channelSa: 1.3, generalSa: 1 } :
    { channelSa: 0.5, generalSa: 0.375 }

  let outputFields = {
    patternWidth: (2 * width) + (2 * height) + (2 * channelSa),
    patternHeight: length + height + (2 * generalSa),
  }

  setCalculatedValues(isMetric, outputFields)
}, 'v0.3')