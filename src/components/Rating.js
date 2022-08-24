import React from 'react'

function Rating({ data }) {
  return (

    <>
      <h3>{data.name}</h3>
      <h4>{data.rating}</h4>
      <h5>{data.date}</h5>
      <p>{data.comments}</p>
    </>

  )
}

export default Rating