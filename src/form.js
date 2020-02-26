import React,{useState} from "react"

const Form = ({addTodo}) => {

   const [value, setValue] = useState("")
   
   const handleSubmit = (e) => {
      e.preventDefault()
      // const subTodos = todos.slice()
      // subTodos.push({note: "スルーパス"})
      // setTodos(subTodos)
      addTodo(value)
      setValue("")
   }

   const handleChange = (e) => {
      setValue(e.target.value)
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
               value={value}
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