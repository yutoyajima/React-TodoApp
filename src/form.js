import React from "react"

const Form = ({setTodos, todos}) => {

   let inputValue

   const handleChange = (e) => {
      inputValue = e.target.value
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      // const subTodos = todos.slice()
      // subTodos.push({note: "スルーパス"})
      // setTodos(subTodos)
      
      setTodos(todos.concat({note: inputValue}))
   }

   return (
      <>
         <h2>入力して追加できます</h2>
         <form action="#" onSubmit={handleSubmit} >
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button type="submit">ADD</button>
         </form >
      </>
   )
} 

export default Form