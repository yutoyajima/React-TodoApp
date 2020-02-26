import React from "react"
import Item from "./Item"


// mapメソッドでItemを回す
// mapメソッド=>配列の要素すべてに同じ処理をする

const List = ({todos, setTodos, removeTodo}) => {

   const todoList = todos.map((todo) => 
      <Item 
         todos={todos} 
         setTodos={setTodos} 
         todo={todo} 
         key={todo.id}
         removeTodo={removeTodo}
      />
   )


   

   return (
      <ul className="todos-list" >
         {/* <Item todo={todos[0]}/> */}
         {/* <Item todo={todos[1]}/> */}
         {/* <Item todo={todos[2]}/> */}
         {/* <Item todo={todos[3]}/> */}
         {todoList}
      </ul>
   )
}

export default List