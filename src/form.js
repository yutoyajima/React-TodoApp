import React from "react"

const Form = ({setTodos, todos, newNote, setNewNote}) => {

   // let inputValue
   
   const handleSubmit = (e) => {
      e.preventDefault()
      // const subTodos = todos.slice()
      // subTodos.push({note: "スルーパス"})
      // setTodos(subTodos)
      setTodos(todos.concat({id: todos.length, note: newNote, isCompleted: false}))
      setNewNote("")
   }

   const handleChange = (e) => {
      setNewNote(e.target.value)
   }

   return (
      <div className="add-form">
         {/* <p>Add Todos</p> */}
         <form 
            action="#" 
            onSubmit={handleSubmit} 
            >
            <input  
               type="text" 
               // value={inputValue} 
               value={newNote}
               placeholder="Add todos..."
               onChange={handleChange}
            />
            <button 
               className="add-btn"
               type="submit"
            >
               +
            </button>
         </form >
      </div>
   )
} 

export default Form