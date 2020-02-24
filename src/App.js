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

   console.log(todos);
   

   const [newNote, setNewNote] = useState("")

   

   return (
      <>
         <Header />
         <Form 
            setTodos={setTodos} 
            todos={todos}
            newNote={newNote}
            setNewNote={setNewNote}
         />
         <List 
            todos={todos}
            setTodos={setTodos} 
         />
      </>
   )
}

export default App