import React , {useState} from "react";

function ToDo() {
    const [task, setTask] = useState(["Eat","Sleep","Code"]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !==""){
            setTask(t => [...t, newTask]);
        setNewTask("");
        }
        

    }

    function deleteTask(index){
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);

    }

    function moveUp(index){
        if(index>0){
            const updatedTasks = [...task];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTask(updatedTasks);
        }

    }

    function moveDown(index){
        if(index<task.length - 1){
            const updatedTasks = [...task];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTask(updatedTasks);
        }

    }

    return(<div className="todo-container">
        <h1>To-Do List</h1>
        <input type="text" className="Type" value={newTask} onChange={handleInputChange} placeholder="Enter a new task" />
        <button className="AddButton"onClick={addTask} >Add Task</button>
         <ol>
            {task.map((item,index) =>  
            <li key={index}>
                <span className="text">{item}</span>
                <button className="Button" onClick={()=>deleteTask(index)}>
                    Delete
                </button>

                 <button className="Button" onClick={()=>moveUp(index)}>
                    Up⬆️
                </button>
                <button className="Button" onClick={()=>moveDown(index)}>
                    Down⬇️
                </button>
                </li>
                )}
        </ol>
        </div>
    );

    


}
export default ToDo;
