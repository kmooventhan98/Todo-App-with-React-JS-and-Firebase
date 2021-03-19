import { List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, {useState} from 'react';
import './Todo.css';
import db from './firebase';


function Todo(props) {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const updateTodo=()=> {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        },{ merge:true })
        setOpen(false);

    }
console.log("the time:" +props.time)
    return (
        <>
            <Modal
                open={open}
                onClose={e=>setOpen(false)}
            >
                <div className="modal-style">
                    <h1>Modal is working here!</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
                    <button onClick={updateTodo}>Update</button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar></ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary={props.time}></ListItemText>
                    <EditIcon onClick={e=>setOpen(true)}/>
                    <DeleteIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
                </ListItem>
            </List>
        </>
    )
}

export default Todo
