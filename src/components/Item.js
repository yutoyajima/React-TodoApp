import React from "react"
import styled from "styled-components"

const Item = ({todos, todo, id, removeTodo, completeTodo}) => {



   const handleRemove = () => {
      if (window.confirm("Remove this todo?")) {
         removeTodo(id)
      }
   }

   const handleComplete = () => {
      completeTodo(id)
   }

   let completeBtnText
   for (let i = 0; i < todos.length; i++) {
      if (todo.isCompleted === true) {
         completeBtnText = "Incomplete"
      } else {
         completeBtnText = "Complete"
      }
   }


   return (
      <>
         {/* <li className="each-todo"> */}
            <ItemStyle>
               <p className="todo-text">{todo.note}</p>
               <div className="list-btns">
                  <button 
                     className="complete-btn"
                     type="text" 
                     onClick={handleComplete} 
                  >
                     {completeBtnText}
                  </button>
                  <button 
                     className="remove-btn"
                     type="text" 
                     onClick={handleRemove} 
                  >
                     Remove
                  </button>
               </div>
            </ItemStyle>
         {/* </li> */}
      </>
   )
} 

const ItemStyle = styled.li`
   margin-top: 30px;
   width: 100%;
   box-shadow: 1px 1px 10px rgb(182, 182, 182);
   border-radius: 8px;
   display: flex;
   padding: 5px 20px;
   justify-content: space-evenly;
   height: 70px;
   line-height: 60px;

   .todo-text {
      font-size: 18px;
      width: 60%;
   }
   .list-btns {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      width: 30%;
   }
   .remove-btn, .complete-btn {
      font-size: 20px;
      font-weight: bold;
      color: rgb(189, 189, 189);
      background-color: #fff;
      border: 0;
      padding: 0;
      &:hover {
         cursor: pointer;
      }
   }
   .complete-btn {
      &:hover {
         color: rgb(0, 119, 255);
      }
   }
   .remove-btn {
      margin-left: 10px;
      &:hover {
         color: red;
      }
   }
`

export default Item