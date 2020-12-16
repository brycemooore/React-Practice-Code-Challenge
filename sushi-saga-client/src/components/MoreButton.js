import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.addSushis()}>
            More sushi!
          </button>
}

export default MoreButton