import generateSvg from `./generateSvg`

describe(`generateSvg`, () => {
    test(`returns valid svg data`, () => {
      const data = {
        shape: `circle`,
        characters: `ABC`,
        shapeColor: `#000`,
        textcolor: `#fff`,
      }
      const svgData = generateSvg(data)
      expect(svgData).toMatch(/<svg.*>.*<\/svg>/s)
    })
})