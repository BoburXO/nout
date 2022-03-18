import React from 'react'
import { useParams } from 'react-router-dom'
import lapTops from '../objects/Data'

const Details = () => {
    const params = useParams()

    const currentData = lapTops.find(el => {
        return(el._id === params.id)
    })
  return (
    <div>
        <img src={currentData.image} alt="" />
        <h1>{currentData.package}</h1>
        <h1>{currentData.cost}</h1>
        <p>{currentData.cash}</p>
    </div>
  )
}

export default Details;