import { useState } from "react";
import "./todo.css";

const Todo = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [editData, setEditData] = useState(null);
    const [editTodoValue, setEditTodoValue] = useState('');

    const onAddTodo = () => {
        const obj = {
            title: value,
            isCompleted: false
        };
        const tempTodo = todos;
        tempTodo.push(obj) // [X, X, N]
        setTodos(tempTodo);
        setValue('');
    }

    const deleteTodo = (index)=>{
        const tempTodos = todos;
        setTodos(tempTodos.filter((e, i)=> i !== index))
    }  
    
    const onSetEditData = (index)=>{
        setEditData(index);
        const todo = todos[index];
        setEditTodoValue(todo.title);
    }

    const resetEdit = ()=>{
        setEditData(null);
        setEditTodoValue('');
    }

    const onUpdateTodo = (index)=>{
        const newTodoTitle = editTodoValue;
        const tempTodos = todos; //[X, X,X]
        const obj = tempTodos[index];
        obj.title = newTodoTitle; 
        tempTodos[index] = obj;
        setTodos(tempTodos);
        resetEdit();
    }

    return (
        <div>
            My Todo's
            <div>
                <input value={value} className="input" type="text"
                    placeholder="Add Todo"
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <button className="add-btn" onClick={onAddTodo}>Add</button>
            </div>
            <div style={{ marginTop: 12, borderTop: '1px solid gray' }}>
               
                {todos.map((todo, index) => (
                     <div className="todo-parent">
                     <div>
                         <input type="checkbox" />
                         {editData === null ?(
                             <span style={{fontSize:18}}>{todo.title}</span>
                         ):(    
                            <input value={editTodoValue}  onChange={e=> setEditTodoValue(e.target.value)}/>
                         )}
                     </div>
                     <div>
                     {editData === null ?(
                            <button  style={{marginRight:12}} onClick={()=>onSetEditData(index)}>Edit</button>
                         ):(    
                           <>
                           <button  style={{marginRight:12}} onClick={resetEdit}>Cancel</button>
                           <button  style={{marginRight:12}} onClick={()=>onUpdateTodo(index)}>Update</button>
                           </>
                         )}
                         

                         <button onClick={()=>deleteTodo(index)}>Delete</button>
                     </div>
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Todo