import React from 'react'

export default function ImgResut(props) {
  return (
    <div>
        <img
            width={400}
            src ={require(`../img/img-${props.imagen}.jpg`)}
        />
    </div>
  )
}
