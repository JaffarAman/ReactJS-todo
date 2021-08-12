import React, { useState } from "react";
import "./App.css";
import AddBtn from "./components/delBtn";
import EditBtn from "./components/editBtn";
import firebase from "./congif/firebase"
function App() {
  // const [todos, setTodos] = useState({todovalue:[] , edit:false});
  const [todos, setTodos] = useState([{title : "Jaffar" , edit : false},{title : "Aman" , edit : false}]);
  const [value, setValue] = useState();
  const [updateValue, setUpdateValue] = useState();
  // const [edit, setEdit] = useState(false);
  
  // console.log(value)
// console.log(firebase.database().ref(""));
  const SetTodo = (e) => {
    setValue(e);
    console.log(value);
  };


  ////Add todo button///
  const addTodo = () => {
    todos.push({title:value , edit : false})
    setTodos(todos)
    console.log(todos);
    // setTodos();
    setValue("");
  };


  const delTodo = (e) => {
    todos.splice(e, 1);
    setTodos([...todos]);
  };
  const editTodo = (e) => {
    todos[e].title = updateValue
    todos[e].edit = false
    setTodos([...todos])
  };
  const delAll = () => {
    setTodos([]);
  };

  const editValue = (e)=>{
      console.log(todos[e].edit);
      todos[e].edit = true
      setTodos([...todos])
    // todos[e].edit = true
    // setTodos(todos)
  }
  return (
    <div>
      <div className="heading">
        <h1>TODO APP</h1>
      </div>

      <div className="control">
        <input
          type="text"
          value={value}
          onChange={(e) => SetTodo(e.target.value)}
          placeholder="Enter Your Todos.."
        />
        <AddBtn value="ADD TODO" addFun={() => addTodo()} />
        <EditBtn value="DELETE ALL" addFun={() => delAll()} />
      </div>

      <div>
        <ul>
          {todos.map((v, i) => {
            return (
              <div className="todoBox" key={i}>
      
                <li className="todoList">
                  {v.edit ?<input className="editInput" type="text" value={updateValue} onChange={(e)=>setUpdateValue(e.target.value)} placeholder="your Value" /> : v.title}
                </li>
                {v.edit ? (
                  <EditBtn value="DONE?" addFun={() => editTodo(i)} />
                ) : (
                  <div className="todosBtn">
                    <AddBtn value="DEL TODO" addFun={() => delTodo(i)} />
                    <EditBtn value="EDIT TODO" addFun={() => editValue(i)} />
                  </div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
