import React from 'react'

export default function ShoppingList(props) {

  function onButtonCLick(element) {
    props.itemClickedEvent(element);
  }


  return (
    <div>
        <ul className='list'>
            {
                props.listItems.map((item, index) => 
                {
                return <li key={index} className={ item.isChecked ? "isChecked": null}>
                        { item.qty } { item.name }
                       </li> 
                })
            }
        </ul>
        <div className='napit'>
        {props.listItems.map((item, index) => 
                {
                return <button className='nappi' onClick={ ()=> onButtonCLick(item)}> {item.name} </button>
                })
        }
        </div>
    </div>
  )
}