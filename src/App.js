import React, {useState} from "react"
// import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"


import { db } from "./config/firebase"

// import "./App.css"
import ResetCss from "./components/resetCSS"
import styled from "styled-components"



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
      db.collection("todos").add({
         note: value,
         isCompleted: false
      })
   }


   const removeTodo = (id) => {
      // const subTodos = todos.slice()
      // subTodos.splice(id, 1)

      // //idの振り直し
      // subTodos.map((todo, i) => {
      //    return(
      //       todo.id = i,
      //       todo.note = todo.note
      //    )
      // })
      // setTodos(subTodos)
      setTodos(todos.filter((todo, index) => index !== id))
   }

   
   const completeTodo = (index) => {
      // const todosIds = todos.map( i => i.id)
      // const id = todosIds.find( i => i === index)
      // const subTodos = todos.slice()
      // if (subTodos[id].isCompleted === true) {
      //    subTodos[id].isCompleted = false
      // } else {
      //    subTodos[id].isCompleted = true
      // }
      // setTodos(subTodos)
      const subTodos = todos.slice()
      subTodos[index].isCompleted = !subTodos[index].isCompleted
      setTodos(subTodos)
   }
   

   return (
      <>
         <ResetCss />  {/*グローバルスタイルを使う ここでok */}
         <Title>What To Do</Title>
         <Form 
            addTodo={addTodo}
            
            />
         <List 
            todos={todos}
            setTodos={setTodos}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
         />
      </>
   )
}

// const GlobalStyle = createGlobalStyle`
//    //reset cssなど
// `

const Title = styled.h1`
   color: #e66465;
   text-align: center;
   font-size: 50px;
   margin: 40px 0;
`

export default App