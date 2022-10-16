/*
    Quick Sack Calculator. 2021.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for rectangular bottom stuff sack
*/

calculatorSetup(function () {
  let isMetric = getIsMetric()
  let fields = ['#bottomLength', '#bottomWidth', '#height'].map(getNumberFromField)

  if (fields.some(field => field <= 0)) {
    return
  }
  let [bottomLength, bottomWidth, height] = fields

  const { cordChannelHeight, hem, sA } = isMetric ?
    { cordChannelHeight: 4, hem: 1, sA: 1 } :
    { cordChannelHeight: 1.5, hem: 0.5, sA: 0.5 }

  let patternHeight

  // add material so top will close when bW is much wider than channel
  if (bottomWidth > (2.5 * cordChannelHeight)) {
    // adds (1/2bW - cordChannelHeight) to top of patternHeight to make up additional width
    patternHeight = height + bottomWidth - cordChannelHeight + (2 * sA)
  } else {
    // 1/2bW is the corner cut off bottom to make rectangular
    patternHeight = height + (0.5 * bottomWidth) + (2 * sA)
  }

  let outputFields = {
    patternLength: (2 * bottomLength) + (2 * bottomWidth) + (2 * sA),
    patternHeight,
    channelLength: (2 * bottomLength) + (2 * bottomWidth) + (2 * hem),      //hem on each end
    channelHeight: (2 * cordChannelHeight) + (2 * sA),      // SA on top and bottom
    sA,
    bottomWidth,
    halfBottomWidth: bottomWidth / 2,
    bottomLength,
  }

  setCalculatedValues(isMetric, outputFields)
}, 'v0.1')
