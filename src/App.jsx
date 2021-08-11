import React, {useState} from "react"
import "./App.css"
import AddBtn from "./components/delBtn"
import EditBtn from "./components/editBtn"
function App(){
  const [todos , setTodos] = useState([])
  const [value , setValue] = useState()
  const SetTodo = (e)=>{
    setValue(e)
    console.log(value);
  }
  const addTodo = ()=>{
      setTodos([...todos , value])
      setValue("")
  }
  const delTodo = (e)=>{
      todos.splice(e,1)
      setTodos([...todos])
  }
  const editTodo = (e)=>{
    let input = prompt("Enter Value")
    todos.splice(e,1,input)
    setTodos([...todos])
  }
  const delAll = ()=>{
    setTodos([])
  }
return(
  <div>
      <div className="heading">
    <h1>TODO APP</h1>
      </div>

    <div className="control">
    <input type="text" value={value} onChange={(e)=>SetTodo(e.target.value)} placeholder="Enter Your Todos.." />
    {/* <button onClick={()=>addTodo()}>ADD</button>
    <button onClick={()=>delAll()}>DELETE</button> */}
    <AddBtn value="ADD TODO" addFun={()=>addTodo()}/>
            <EditBtn value="DELETE ALL" addFun={()=>delAll()}/>

    </div>
    
      <div>
      <ul>
        {todos.map((v,i)=>{
          return(
            <div className="todoBox" key={i}>
           <li className="todoList">{v}</li>
           <AddBtn value="DEL TODO" addFun={()=>delTodo(i)}/>
            <EditBtn value="EDIT TODO" addFun={()=>editTodo(i)}/>
        </div>
           
          )
        })}
      </ul>
      </div>
  </div>


) 

}

export default App