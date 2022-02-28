import './App.css';
import Headers from "./components/Headers";
import ShoppingList from './components/ShoppingList';
import { useState } from 'react';

function App() {

    const [ ShoppingListItems, setShoppingListItems ] = useState([

        {
            id: 1,
            name: "Kaljaa",
            qty:  0,
            isChecked: false
        },
        {
            id: 2,
            name: "Sipsiä",
            qty: 0,
            isChecked: false
        },
        {
            id: 3,
            name: "Kukkakaalia",
            qty: 0,
            isChecked: false
        },
        {
            id: 4,
            name: "Munaa",
            qty: 0,
            isChecked: false
        },
    ]);


/*
    const onListAdditionKaljaa = () =>{
        let newShoppingListItems = [...ShoppingListItems, 
        {
            id: 1,
            name: "Kaljaa",
            qty: Math.floor(Math.random() * 11),
        }];
        setShoppingListItems(newShoppingListItems);
    }
    const onListAdditionSipsiä = ( quantity ) =>{
        
    }
    const onListAdditionKukkakaalia = () =>{
        let newShoppingListItems = [...ShoppingListItems, {
            id: 3,
            name: "Kukkakaalia",
            qty: Math.floor(Math.random() * 11),
        }];
        setShoppingListItems(newShoppingListItems);
    }
    const onListAdditionMunia = () =>{
        let newShoppingListItems = [...ShoppingListItems, {
            id: 4,
            name: "Munaa",
            qty: Math.floor(Math.random() * 11),
        }];
        setShoppingListItems(newShoppingListItems);
    }

            <ListInputsKaljaa onAddClick={ onListAdditionKaljaa }/>
            <ListInputsSipsiä onAddClick={ onListAdditionSipsiä }/>
            <ListInputsKukkakaalia onAddClick={ onListAdditionKukkakaalia }/>
            <ListInputsMunia onAddClick={ onListAdditionMunia }/>
*/
    const handleItemCheckedToggle = (item) => {
        console.log(item);

        let newShoppingListItems = [...ShoppingListItems];

        let itemClickedIndex = newShoppingListItems.findIndex(i => item.id == i.id);
        if(itemClickedIndex != -1) {
            let newElement = {...newShoppingListItems[itemClickedIndex]}
            newElement.qty = newElement.qty+Math.floor(Math.random() * 101);
            newShoppingListItems[itemClickedIndex] = newElement;
            setShoppingListItems(newShoppingListItems);
        }
    }
    
  return (
    <div className="App">
        <Headers />
        <ShoppingList listItems={ ShoppingListItems } itemClickedEvent={ handleItemCheckedToggle }/>
        <div className='napit'>

        </div>
    </div>
  );

}

export default App;