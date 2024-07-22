import { taskReducer } from "@/reducer/taskReducer";
import { Task } from "@/types/Task";
import { createContext, ReactNode, useEffect, useReducer } from "react";

type TaskContextType = {
    tasks: Task[]
    addTask: (title: string, category: string) => void
    editTask: (id: number, newTitle: string, newCategory: string) => void
    doneTask: (id: number) => void
    deleteTask: (id: number) => void
}

export const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: ReactNode }) => {

    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const localData = localStorage.getItem('tasks')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title: string, category: string) => {
        dispatch({
            type: 'add',
            payload: { title, category }
        })
    }

    const editTask = (id: number, newTitle: string, newCategory: string) => {
        dispatch({
            type: 'edit',
            payload: { id, newTitle, newCategory }
        })
    }

    const doneTask = (id: number) => {
        dispatch({
            type: 'done',
            payload: { id }
        })
    }

    const deleteTask = (id: number) => {
        dispatch({
            type: 'delete',
            payload: { id }
        })
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, doneTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}