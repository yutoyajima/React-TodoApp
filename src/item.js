import React from "react"

const Item = ({todos, setTodos, todo, key}) => {

   const handleRemove = () => {
      const subTodos = todos.slice()
      subTodos.splice(key, 1)

      //idの振り直し
      subTodos.map((todo, i) => {
         return(
            todo.id = i,
            todo.note = todo.note
         )
      })

      setTodos(subTodos)
   }

   return (
      <>
         <li>
            <p>{todo.note}</p>
            <button 
               type="text" 
               onClick={handleRemove} 
            >
               Remove
            </button>
         </li>
      </>
   )
} 

export default Item