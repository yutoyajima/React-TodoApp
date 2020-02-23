import React, {useState} from "react"
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
         note: "幅をとる"
      },
      {
         id: 1,
         note: "スペースを作る"
      },
      {
         id: 2,
         note: "裏に抜ける"
      },
      {
         id: 3,
         note: "ハーフスペースに入る"
      },
      {
         id: 4,
         note: "くさびを通す"
      }
   ]) 

   const [newNote, setNewNote] = useState("")

   

   return (
      <>
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