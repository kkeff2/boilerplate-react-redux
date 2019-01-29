import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  list: PropTypes.array.isRequired
}

const List = ({list}) => {
  return (
    <div className='list'>
      {list.map((li, index) => (
        <div key={index}>
          {li.name}
        </div>
      ))}
    </div>
  )
}

List.propTypes = propTypes

export default List
