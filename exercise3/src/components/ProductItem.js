import React from 'react'

export default function ProductItem(props) {
  return (
    <div>
      <div className='ProductItem'>

        <div className='imagestack'>
        <div className='bestseller'><img src={ props.bestseller }/></div>
        <div className='image'><img src={ props.image }/></div>
        </div>

        <div><h1 className='header'>{ props.name }</h1></div>

        <div>{ props.description }</div>

        <div className='stars'>
          <line>User review:</line>
          <img src={ props.stars }/>
        </div>

        <div className='prize'>${ props.price }</div>

      </div>
    </div>
  )
}
