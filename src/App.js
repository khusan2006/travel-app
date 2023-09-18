import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([])
  
  const handleDeleteItem = (id) => {
    setItems(items => items.filter(item => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems((items) => (
      items.map((item) => {
        return item.id === id ? {...item, packed: !item.packed} : item
      })
    ))
  } 
  const handleClearItems = () => {
    const confirmed = window.confirm('Are you sure that you want delete all items')

    confirmed && setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} handleClearItems={handleClearItems}  />
      <Stats items={items}/>
    </div>
  );
}

export default App;
