import React,{useState} from "react"
import styled from "styled-components"

const Form = ({ addTodo,  }) => {

   const [value, setValue] = useState("")
   
   const handleSubmit = (e) => {
      e.preventDefault()
      if (!value) {
         alert("入力してください")
      } else {
         addTodo(value)
         setValue("")
      }
   }

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   return (
      <FormStyle>
         <form 
            action="#" 
            onSubmit={handleSubmit} 
            >
            <input  
               type="text" 
               value={value}
               placeholder="Add todos..."
               onChange={handleChange}
            />
            <button 
               className="add-btn"
               type="submit"
            >
               +
            </button>
         </form >
      </FormStyle>
   )
} 


const FormStyle = styled.form`
   background-color: #000;
   padding: 30px 0;
   background: linear-gradient(#e66465, #fc6cb4);
   form {
      width: 50%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      input {
         width: 82%;
         height: 50px;
         background-color: rgba(255, 255, 255, 0.575);
         font-size: 22px;
         border: 0;
         border-radius: 7px;
         padding: 0 30px;
      }
      button {
         width: 50px;
         height: 50px;
         padding: 0;
         border: 0;
         background-color: rgba(0, 119, 255, 0.651);
         color: #fff;
         font-size: 40px;
         line-height: 50px;
         border-radius: 5px;
         &:hover {
            cursor: pointer;
            background-color: rgba(0, 204, 255, 0.651);
         }
      }
   }
`

export default Form