/*
    Quick Sack Calculator. 2021.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for rectangular bottom stuff sack
*/

calculatorSetup(function () {
  let isMetric = getIsMetric();
  let fields = ['#bottomLength', '#bottomWidth', '#height'].map(getNumberFromField);

  if (fields.some(field => field <= 0)) {
    return;
  }
  let [bottomLength, bottomWidth, height] = fields;

  const { rollTop, hem, sA } = isMetric ?
    { rollTop: 12, hem: 4, sA: 1.5 } :
    { rollTop: 4.5, hem: 1.5, sA: 5 / 8 };

  let rollTopHeight = rollTop + hem;
  let patternHeight;

  // add material so top will close when bottomWidth is wide
  if (bottomWidth > 3) {
    // adds (1/2bW) to top of fabricH to make up additional width
    patternHeight = height + bottomWidth + sA + rollTopHeight;
  } else {
    // 1/2bW is the corner cut off bottom to make rectangular
    patternHeight = height + (0.5 * bottomWidth) + sA + rollTopHeight;
  }

  let outputFields = {
    patternLength: (2 * bottomLength) + (2 * bottomWidth) + (2 * sA),
    patternHeight,
    webbingLength: bottomLength + bottomWidth + (4 * hem), //adds hem on each end to fold under
    halfBottomWidth: bottomWidth / 2,
    halfTop: bottomLength + bottomWidth,
    bottomLength,
    bottomWidth,
    sA,
    hem,
  };

  setCalculatedValues(isMetric, outputFields);
}, 'v0.1');