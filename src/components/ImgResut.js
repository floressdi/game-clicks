import React from 'react'

export default function ImgResut(props) {
  return (
    <div>
        <img
            width={270}
            src ={require(`../img/img-${props.imagen}.jpg`)}
        />
    </div>
  )
}
