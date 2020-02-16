import React, {useState} from "react"
import Form from "./Form"
import List from "./List"


const App = () => {

   // const [todos, setTodos] = useState([
   //    "幅をとる",
   //    "スペースを作る",
   //    "裏に抜ける",
   //    "ハーフスペースをつく",
   //    "くさびを通す"
   // ]) 

   const [todos, setTodos] = useState([
      {note: "幅をとる"},
      {note: "スペースを作る"},
      {note: "裏に抜ける"},
      {note: "ハーフスペースに入る"},
      {note: "くさびを通す"}
   ]) 
   console.log(todos);
   

   const todosValue = todos.map(value => value.note)
   

   return (
      <>
         <Form 
            setTodos={setTodos} 
            todos={todos}
         />
         <List todosValue={todosValue} />
      </>
   )
}

export default App