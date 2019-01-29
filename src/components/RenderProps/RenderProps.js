import React from 'react'
import PropTypes from 'prop-types'

import RenderPropsServiceCall from '../../hoc/RenderPropsServiceCall'
import List from './List'

const propTypes = {
  response: PropTypes.array,
  callService: PropTypes.func.isRequired
}

const RenderProps = ({response, callService}) => {
  console.log(response)
  console.log(callService)
  return (
    <div>
      This is the header
      <RenderPropsServiceCall render={response => (
        <List list={response} />
      )} />
    </div>
  )
}

RenderProps.propTypes = propTypes

export default RenderProps
