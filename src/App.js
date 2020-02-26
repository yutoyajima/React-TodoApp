import React, {useState} from "react"
import Header from "./Header"
import Form from "./Form"
import List from "./List"
import "./App.css"


const App = () => {

   // const [todos, setTodos] = useState([
   //    "幅をとる",
   //    "スペースを作る",
   //    "裏に抜ける",
   //    "ハーフスペースをつく",
   //    "くさびを通す"
   // ]) 

   const [todos, setTodos] = useState([
      {
         id: 0,
         note: "幅をとる",
         isCompleted: false
      },
      {
         id: 1,
         note: "スペースを作る",
         isCompleted: false
      },
      {
         id: 2,
         note: "裏に抜ける",
         isCompleted: false
      },
      {
         id: 3,
         note: "ハーフスペースに入る",
         isCompleted: false
      },
      {
         id: 4,
         note: "くさびを通す",
         isCompleted: false
      }
   ]) 

   const addTodo = (value) => {

      setTodos([
         ...todos,
         {
            note:value,
            id: todos.length
         }
      ])
      // setTodos(todos.concat({
      //    id: todos.length, 
      //    note: value, 
      //    isCompleted: false
      // }))
   }

   const removeTodo = (id) => {
      const subTodos = todos.slice()
      subTodos.splice(id, 1)

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
         <Header />
         <Form 
            addTodo={addTodo}
            />
         <List 
            todos={todos}
            setTodos={setTodos}
            removeTodo={removeTodo}
         />
      </>
   )
}

export default App