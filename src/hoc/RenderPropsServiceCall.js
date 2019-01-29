import React from 'react'

class RenderPropsServiceCall extends React.Component {
  componentDidMount () {
    this.props.callService()
  }
  render () {
    return (
      <div>
        RENDER PROPS
      </div>
    )
  }
}

export default RenderPropsServiceCall
