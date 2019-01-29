import React from 'react'

import ConnectedRenderProps from '../../containers/RenderProps/RenderProps'

const App = () => {
  return (
    <div className='app-container' data-test-id='app-container'>
      <ConnectedRenderProps />
    </div>
  )
}

export default App
