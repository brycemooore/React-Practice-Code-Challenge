import React, { Fragment, useState, useEffect  } from 'react'

const Sushi = (props) => {

  const[eaten, setEaten] = useState(false);

  useEffect(() => {
    setEaten(false)
  }, [props.sushi])


  const eatSushi = () => {
    if(eaten) return
    if((props.currentBalance - props.sushi.price) < 0)return alert("You broke")
    props.updateTable()
    props.changeBalance(props.sushi.price)
    setEaten(true);
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={eatSushi}>
        { 
          eaten ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi