import {assert} from 'chai'

describe('Hello function', () => {
  it('should return hello world', () => {
    const foo = 'bar'

    const tea = {
      flavors: [1, 2, 4]
    }

    assert.typeOf(foo, 'string')
    assert.equal(foo, 'bar')
    assert.lengthOf(foo, 3)
    assert.property(tea, 'flavors')
    assert.lengthOf(tea.flavors, 3)
  })
})
