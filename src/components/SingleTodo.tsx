import { useEffect, useState } from 'react'
import { ITask } from '../context/todo/Interfaces'
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  index: number;
  task: ITask;

}

const TodoTask = ({ index, task }: Props) => {
  
  const [date ,setDate] = useState('');
  useEffect(() =>{
    let todayDate = new Date(task.taskdate),
    month = ""+(todayDate.getMonth()+1),
    day = ""+todayDate.getDate(),
    year = ""+todayDate.getFullYear();

    if (day.length<2) {
      day = '0'+day  
    }
    if (month.length<2) {
        month = '0'+month  
      }

      setDate([day,month,year].join('-'));
  },[task.taskdate])

    return (
    <>
      <Draggable draggableId={task.taskid.toString()} index={index}>
        {(provided,snapshot) => (
          <div className={`displayData ${snapshot.isDragging?"isDraging":""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
            <span className='taskname'>{task.taskname}</span>
            <span className='taskdate'> {date}</span>
            <span className='taskstatus'>{task.taskstatus}</span>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default TodoTask