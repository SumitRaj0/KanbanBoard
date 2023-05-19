import React, { useContext } from "react";
import AddNewTask from "./AddNewTask";
import TodoTask from "./SingleTodo";
import { ITask } from "../context/todo/Interfaces";
import { Droppable } from "react-beautiful-dnd";
import { TodoContext } from "../context/todo/todoContext";

const Home = () => {

    const { todolist, pendingtodo, comptodolist } = useContext(TodoContext);

    return (
        <>
            <div>
                <h3 id="title">To DO List</h3>

                <div className='boxes'>
                    <div id='div' className='box1' >
                        <h4 id='act'>Add New Task</h4>
                        <AddNewTask />
                    </div>
                    <Droppable droppableId="todolist" >
                        {
                            (provided, snapshot) =>
                            (
                                <div id='div' className={`box1 ${snapshot.isDraggingOver ? "dragactive" : ""} `} ref={provided.innerRef} {...provided.droppableProps} >
                                    <h4 id='act'>ACTIVE TASK</h4>
                                    {todolist.map((task: ITask, index: number) => {
                                        return <TodoTask
                                            index={index}
                                            key={task.taskid}
                                            task={task}
                                        />
                                    })}
                                    {provided.placeholder}
                                </div>
                            )
                        }

                    </Droppable>

                    <Droppable droppableId="todolistPending" >
                        {
                            (provided, snapshot) =>
                            (
                                <div id='div' className={`box2 ${snapshot.isDraggingOver ? "dragPending" : " "}`} ref={provided.innerRef}{...provided.droppableProps} >
                                    <h4 id='act'>PENDING TASK</h4>
                                    {pendingtodo.map((task: ITask, index: number) => {
                                        return <TodoTask
                                            index={index}
                                            key={task.taskid}
                                            task={task} />
                                    })}
                                    {provided.placeholder}
                                </div>

                            )
                        }

                    </Droppable>

                    <Droppable droppableId="todolistCompleted" >
                        {
                            (provided, snapshot) => (
                                <div id='div' className={`box3 ${snapshot.isDraggingOver ? "dragComplete" : ""}`} ref={provided.innerRef} {...provided.droppableProps} >
                                    <h4 id='act'>COMPLETED TASK</h4>
                                    {comptodolist.map((task: ITask, index: number) => {
                                        return <TodoTask
                                            index={index}
                                            key={task.taskid}
                                            task={task} />
                                    })}
                                    {provided.placeholder}
                                </div>
                            )
                        }
                    </Droppable>


                </div>

            </div>
        </>
    );
}
export default Home;