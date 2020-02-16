import React from "react"
import Item from "./Item"

// mapメソッドでItemを回す
// mapメソッド=>配列の要素すべてに同じ処理をする

const List = ({todosValue}) => {

   // const todoList = todos.map( (each) => {
   //    return (
   //       <Item todo={each}/>
   //    )
   // } )

   const todoList = todosValue.map(each => <Item todo={each}/>)
   console.log(todosValue);
   
   

   return (
      <ul>
         {/* <Item todo={todos[0]}/> */}
         {/* <Item todo={todos[1]}/> */}
         {/* <Item todo={todos[2]}/> */}
         {/* <Item todo={todos[3]}/> */}
         {todoList}
      </ul>
   )
}

export default List