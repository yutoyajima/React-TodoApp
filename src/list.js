import React from "react"
import Item from "./Item"

const List = ({todo}) => {
   return (
      <ul>
         <Item todo={todo[0]}/>
         <Item todo={todo[1]}/>
         <Item todo={todo[2]}/>
      </ul>
   )
}

export default List