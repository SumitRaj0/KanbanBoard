import { useContext } from 'react';
import './App.css';
import Home from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TodoContext } from './context/todo/todoContext';


function App() {



  const { todolist, setTodolist, pendingtodo, setPendingtdo, comptodolist, setComptodolist } = useContext(TodoContext);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todolist,
      pending = pendingtodo,
      completed = comptodolist;

    if (source.droppableId === 'todolist') {
      add = active[source.index];
      active.splice(source.index, 1);
    }
    else if (source.droppableId === 'todolistPending') {
      add = pending[source.index];
      pending.splice(source.index, 1);
    }
    else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === 'todolist') {
      active.splice(destination.index, 0, { ...add, taskstatus: "Active" });

    }
    else if (destination.droppableId === 'todolistPending') {
      pending.splice(destination.index, 0, { ...add, taskstatus: "Pending" });

    }
    else {
      completed.splice(destination.index, 0, { ...add, taskstatus: "Completed" });
    }

    setComptodolist(completed);
    setPendingtdo(pending);
    setTodolist(active);
    
  };

  return (
    <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Home/>
        </DragDropContext>
    </div>
  );
}

export default App;
