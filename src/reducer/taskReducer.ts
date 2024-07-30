import { Task } from "@/types/Task"

type AddTask = {
    type: 'add',
    payload: { title: string, category: string }
}

type EditTask = {
    type: 'edit',
    payload: { id: number, newTitle: string, newCategory: string }
}

type DoneTask = {
    type: 'done',
    payload: { id: number }
}

type DeleteTask = {
    type: 'delete',
    payload: { id: number }
}

type LoadTasks = {
    type: 'load',
    payload: Task[]
}

type TaskActions = AddTask | EditTask | DoneTask | DeleteTask | LoadTasks 

export const taskReducer = (task: Task[], action: TaskActions) => {
    switch (action.type) {
        case 'add':
            return [...task, {
                id: task.length,
                title: action.payload.title,
                category: action.payload.category,
                done: false
            }]
        case 'edit':
            return task.map(t => {
                if (t.id === action.payload.id) {
                    t.title = action.payload.newTitle
                    t.category = action.payload.newCategory
                }
                return t
            })
        case 'done':
            return task.map(t => {
                if (t.id === action.payload.id) {
                    return { ...t, done: !t.done }
                }
                return t
            })
        case 'delete':
            return task.filter(t => t.id !== action.payload.id)
        case 'load': 
            return action.payload
        default:
            return task
    }
}