import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import WhyUseIt from './WhyUseIt'

describe('WhyUseIt', () => {
  it('does what it is supposed to', () => {
    const wrapper = shallow(<WhyUseIt />)
    expect(wrapper.children().length).not.toBe(0)
  })
})
