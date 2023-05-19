import { ReactNode, createContext, useState } from "react";
import { ITask } from "./Interfaces";

type userValue = {
    taskid:number;
    title: string;
    todolist:ITask[];
    date: string;
    pendingtodo:ITask[];
    status: string;
    comptodolist:ITask[];

}

export type data = {
    title: any;
    setTitle: Function;
    date: any;
    setdate: Function;
    status: any;
    setstaus: Function;
    todolist: ITask[];
    setTodolist: React.Dispatch<React.SetStateAction<ITask[]>>;
    pendingtodo: any;
    setPendingtdo: Function;
    comptodolist: any;
    setComptodolist: Function;
}

type TodoContextProviderType = {
    children: ReactNode
}

export const TodoContext = createContext({} as data);

export const TodoContextProvider = ({ children }: TodoContextProviderType) => {

    const [todolist, setTodolist] = useState<ITask[]>([]);
    const [pendingtodo, setPendingtdo] = useState<ITask[]>([]);
    const [comptodolist, setComptodolist] = useState<ITask[]>([]);
    
    
    const [title, setTitle] = useState<userValue | null>(null);
    const [date, setdate] = useState<userValue | null>(null);
    const [status, setstaus] = useState<userValue | string>('Active');

    return <TodoContext.Provider value={{ 
        title, setTitle,
         date, setdate,
          status, setstaus,
          todolist, setTodolist,
          pendingtodo, setPendingtdo,
          comptodolist, setComptodolist

          }}>
        {children}
    </TodoContext.Provider>

}
export default TodoContext;

