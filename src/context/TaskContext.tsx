import { taskReducer } from "@/reducer/taskReducer";
import { Task } from "@/types/Task";
import { createContext, ReactNode, useReducer } from "react";

type TaskContextType = {
    tasks: Task[]
    addTask: (title: string, category: string) => void
    editTask: (id: number, newTitle: string, newCategory: string) => void
    doneTask: (id: number) => void
    deleteTask: (id: number) => void
    loadTasks: (tasks: Task[]) => void
}

export const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

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

    const loadTasks = (tasks: Task[]) => {
        dispatch({
            type: 'load',
            payload: tasks
        })
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, doneTask, deleteTask, loadTasks }}>
            {children}
        </TaskContext.Provider>
    )
}
