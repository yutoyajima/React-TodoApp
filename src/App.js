import React from "react"
import Form from "./Form"
import List from "./List"

const todo = [
   "幅をとる",
   "スペースを作る",
   "裏に抜ける"
]

const App = () => {
   return (
      <>
         <Form/>
         <List todo={todo}/>
      </>
   )
}

export default App