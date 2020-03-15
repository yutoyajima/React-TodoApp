import React from "react"
import Item from "./Item"
import styled from "styled-components"


// mapメソッドでItemを回す
// mapメソッド=>配列の要素すべてに同じ処理をする

const List = ({todos, removeTodo, completeTodo}) => {

   const todoList = todos.map((todo) => 
      <Item 
         todos={todos} 
         todo={todo} 
         key={todo.id}
         // key={index}
         id={todo.id}
         removeTodo={removeTodo}
         completeTodo={completeTodo}
      />
   )


   

   return (
      <ListStyle>
         <ul className="todos-list" >
            {/* <Item todo={todos[0]}/> */}
            {/* <Item todo={todos[1]}/> */}
            {/* <Item todo={todos[2]}/> */}
            {/* <Item todo={todos[3]}/> */}
            {todoList}
         </ul>
      </ListStyle>
   )
}

const ListStyle = styled.div`
   width: 60%;
   margin: 70px auto;
`

export default List