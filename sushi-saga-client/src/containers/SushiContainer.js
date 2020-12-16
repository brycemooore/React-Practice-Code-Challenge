import React, { Fragment} from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    return props.theSushi.map((sushi, index) => <Sushi currentBalance={props.currentBalance} updateTable={props.updateTable} changeBalance={props.changeBalance} key={index} sushi={sushi}/>)
  }
  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton addSushis={props.addSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer