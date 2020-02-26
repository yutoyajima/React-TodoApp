import React from "react"

const Item = ({todos, setTodos, todo, removeTodo}) => {




   const handleComplete = () => {

      const todosIds = todos.map( i => i.id)
      const id = todosIds.find( i => i === todo.id)
      console.log(id);
      const subTodos = todos.slice()

      if (subTodos[id].isCompleted === true) {
         subTodos[id].isCompleted = false
      } else {
         subTodos[id].isCompleted = true
      }

      setTodos(subTodos)
   }



   

   let completeBtnText
   for (let i = 0; i < todos.length; i++) {
      if (todo.isCompleted === true) {
         completeBtnText = "Incomplete"
      } else {
         completeBtnText = "Complete"
      }
   }



   

   const handleRemove = () => {
      removeTodo(todo.id)
   }

   return (
      <>
         <li className="each-todo">
            <p className="todo-text">{todo.note}</p>
            <div className="list-btns">
               <button 
                  className="complete-btn"
                  type="text" 
                  onClick={handleComplete} 
               >
                  {completeBtnText}
               </button>
               <button 
                  className="remove-btn"
                  type="text" 
                  onClick={handleRemove} 
               >
                  Remove
               </button>
            </div>
         </li>
      </>
   )
} 

export default Item