import React, { useContext } from "react";
import { TodoContext } from "../context/todo/todoContext";

function AddNewTask() {

    const todoContext = useContext(TodoContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const Addtask = () => {
        const newTask = { taskid: Date.now(), taskname: todoContext.title, taskdate: todoContext.date, taskstatus: todoContext.status };
        todoContext.setTodolist([...todoContext.todolist, newTask]);
        todoContext.setTitle("");
        todoContext.setdate("");
    };
    return (
        <>
            <div>
                <div className="addbox">

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="title" className="l">Title</label><br />
                        <input id='l' maxLength={13} type="text" value={todoContext.title} onChange={(e) => todoContext.setTitle(e.target.value)} /> <br />
                        <label htmlFor="date" className="b">Date</label><br />
                        <input id="b" type="date" value={todoContext.date} onChange={(e) => todoContext.setdate(e.target.value)} /> <br />
                        <label htmlFor="status" className="lb">Status</label><br />
                        <input id="lb" type="text" value={todoContext.status} onChange={(e) => todoContext.setstaus(e.target.value)} /> <br />
                        <input id='bt' type="submit" value="+Add" onClick={Addtask} />

                    </form>


                </div>
            </div>
        </>
    );
}
export default AddNewTask;