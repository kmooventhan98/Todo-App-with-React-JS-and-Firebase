import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import './App.css';
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodo] = useState([])
  const [input, setInput] = useState('')

  //when the app loads, this will fetch the data
  //useEffect(funciton, dependecie)   syntax for useeffect
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodo(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
    });
  },[]);

  const addTodo=(event)=>{
    event.preventDefault();//for the input type="submit" will reload the page
    //setTodo([...todos, input])//here ...todos is append the input
    setInput('')//clear the text box null
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  var date=new Date();
  return (
    <div className="App">
      <h1>Todo App with React</h1>
      <form>
        <FormControl>
          <InputLabel> Add Todo Here</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
        
        <Button variant="contained" color="primary" type="submit" onClick={addTodo} disabled={!input}>
          Add Todo
        </Button>
        
      </form>
       <ol>
          {todos.map(todo=>(<Todo todo={todo} time={date.toLocaleTimeString()}/>))}
       </ol>
       
    </div>
  );
}

export default App;

