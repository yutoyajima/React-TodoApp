import React from "react"

const Form = ({setTodos, todos, newNote, setNewNote}) => {

   // let inputValue
   
   const handleSubmit = (e) => {
      e.preventDefault()
      // const subTodos = todos.slice()
      // subTodos.push({note: "スルーパス"})
      // setTodos(subTodos)
      setTodos(todos.concat({id: todos.length, note: newNote}))
      setNewNote("")
   }

   const handleChange = (e) => {
      setNewNote(e.target.value)
   }

   return (
      <>
         <h2>入力して追加できます</h2>
         <form 
            action="#" 
            onSubmit={handleSubmit} 
         >
            <input  
               type="text" 
               // value={inputValue} 
               value={newNote}
               onChange={handleChange}
            />
            <button 
               type="submit"
            >
               ADD
            </button>
         </form >
      </>
   )
} 

export default Form