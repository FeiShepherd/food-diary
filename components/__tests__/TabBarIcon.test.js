import React from 'react'
import renderer from 'react-test-renderer'

import TabBarIcon from '../TabBarIcon'

describe('TabBarIcon', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<TabBarIcon />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  it(`renders correctly with Focused`, () => {
    const tree = renderer.create(<TabBarIcon focused={true}/>).toJSON()

    expect(tree).toMatchSnapshot()
  })

})
