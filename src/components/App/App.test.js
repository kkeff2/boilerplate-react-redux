import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App (Component):', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('Dummy test', () => {
    expect(true).toBeTruthy()
    expect(wrapper.length).toBeTruthy()
  })
})
