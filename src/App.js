import React, { useState, useEffect } from "react"
import Form from "./components/Form"
import List from "./components/List"


import { db } from "./config/firebase"

// import "./App.css"
import ResetCss from "./components/resetCSS"
import styled from "styled-components"



const App = () => {

   const [todos, setTodos] = useState([
      // {
      //    id: 0,
      //    note: "幅をとる",
      //    isCompleted: false
      // }
   ]) 

   // useEffectの第二引数が変わったときにだけ実行する(中身がない時は初回renderの時)
   useEffect(() => {
      db.collection("todos")
         .get()
         .then((querySnapshot) => {
            // querySnapshot.forEach((doc) => {
            //    console.log(`${doc.id} => ${doc.data()}`);
            // })
            // console.log(
            //    querySnapshot.docs.map( doc => doc.data())
            //    );
            const savedTodos = querySnapshot.docs.map( doc => {
               const todo = doc.data()
               todo.id = doc.id
               return todo
            })
            console.log(savedTodos);
            setTodos(
               savedTodos
               )
         })
   }, [])


   const addTodo = (value) => {
      // setTodos(todos.concat({
         //    id: todos.length, 
         //    note: value, 
         //    isCompleted: false
         // }))
         
      const newTodo = {
         note: value,
         isCompleted: false
      }
      
      db.collection("todos")
         .add(newTodo)
         .then((docRef) => {
            console.log("todo added", docRef);
            newTodo.id = docRef.id
            setTodos([
               ...todos,
               newTodo
            ])
         })
         .catch((error) => {
            console.log(error);
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
      db.collection("todos").doc(id)
         .delete()
         .then(() => {
            console.log("todo deleted");
            //画面から消す作業
            setTodos(todos.filter((todo) => todo.id !== id))

         })
         .catch(err => {
            console.log(err);
         })
   }

   
   const completeTodo = (id) => {
      // const todosIds = todos.map( i => i.id)
      // const id = todosIds.find( i => i === index)
      // const subTodos = todos.slice()
      // if (subTodos[id].isCompleted === true) {
      //    subTodos[id].isCompleted = false
      // } else {
      //    subTodos[id].isCompleted = true
      // }
      // setTodos(subTodos)

      // const subTodos = todos.slice()
      // subTodos[id].isCompleted = !subTodos[id].isCompleted
      // setTodos(subTodos)
      
      
      const subTodos = todos.slice()
      const targetTodo = subTodos.filter(todo => todo.id === id)

      if (!targetTodo[0].isCompleted) {
         db.collection("todos").doc(id)
            .update({
               isCompleted: !false
            })
            .then(() => {
               console.log("toggled!");
               targetTodo[0].isCompleted = !targetTodo[0].isCompleted
               setTodos(subTodos)
            })
            .catch(err => console.log(err))

      } else if (targetTodo[0].isCompleted) {
         db.collection("todos").doc(id)
            .update({
               isCompleted: !true
            })
            .then(() => {
               console.log("toggled!");
               targetTodo[0].isCompleted = !targetTodo[0].isCompleted
               setTodos(subTodos)
            })
            .catch(err => console.log(err))
      }

      
   }
   
   console.log(todos);
   

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