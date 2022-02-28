import React from 'react'
import ProductItem from './ProductItem'

export default function ProductListView(props) {

  return (
    <div>
      <div className='säiliö'>
        { props.products.map(p => <ProductItem name={p.title} image={p.thumbnail} bestseller={p.bestseller} description={p.description} stars={p.stars} price={p.price} />) }
      </div>
    </div>
  )
}
