import { useState } from "react"

type ListProps = {
    initialItems: string[]
}

function List({initialItems} : ListProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems)

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList(v: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== v))
    }, 500)
  }

  return (
    <>
      <input placeholder="Novo Item" type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(v => <li key={v}>
          {v}
          <button onClick={() => removeFromList(v)}>Remover</button>
        </li>)}
      </ul>
    </>
  )
}

export default List
