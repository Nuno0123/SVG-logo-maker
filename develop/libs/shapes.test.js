const Shape = require('./shapes')

describe('Shape', () => {
    test('setTextColor sets the text color', () => {
        const shape = new Shape('cirlce', 'ABC', '#000')
        shape.setTextColor('#fff')
        expect(shape.setTextColor).toBe('#fff')
    })
})