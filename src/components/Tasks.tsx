"use client"

import { TaskContext } from "@/context/TaskContext"
import { useContext, useState } from "react"
import { Button } from "./ui/button"
import { SearchTask } from "./SearchTask"
import { Separator } from "./ui/separator"
import { FilterTask } from "./FilterTask"

export const Tasks = () => {
    const taskCtx = useContext(TaskContext)

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('Todas')

    const handleDone = (id: number) => {
        taskCtx?.doneTask(id)
    }

    const handleEdit = (id: number) => {
        const item = taskCtx?.tasks.find(it => it.id === id)
        if (!item) return false

        const newTitle = window.prompt('Editar Título da Tarefa', item.title)
        if (!newTitle || newTitle.trim() === '') return false

        const newCategory = window.prompt('Editar Categoria da Tarefa', item.category)
        if (!newCategory || newCategory.trim() === '') return false

        taskCtx?.editTask(id, newTitle, newCategory)
    }

    const handleDelete = (id: number) => {
        taskCtx?.deleteTask(id)
    }

    return (
        <div>
            <SearchTask search={search} setSearch={setSearch} />
            <Separator />
            <FilterTask filter={filter} setFilter={setFilter} />
            <Separator />
            <div className="flex flex-col gap-2">
                {taskCtx?.tasks
                .filter((tasks) => filter === "Todas" ? true : filter === "Completas" ? tasks.done : !tasks.done)
                    .filter((tasks) =>
                        tasks.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(task => (
                            <div key={task.id} className="flex-col flex justify-between items-center gap-4 bg-white w-full rounded-md p-2 my-2 mt-5 md:my-0 md:mt-0 h-28 md:flex-row md:h-20">
                                <div className="flex flex-1 flex-col items-start">
                                    <div className="m-1" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.title}</div>
                                    <div className="m-auto md:m-1" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>({task.category})</div>
                                </div>
                                <div className="flex flex-1 justify-end gap-2">
                                    <Button onClick={() => handleDone(task.id)} className="w-16 h-5 md:h-7 text-[12px] bg-green-600 hover:opacity-70">{task.done ? 'Defazer' : 'Concluir'}</Button>
                                    <Button onClick={() => handleEdit(task.id)} className="w-16 h-5 md:h-7 text-[12px] bg-yellow-600 hover:opacity-70">Editar</Button>
                                    <Button onClick={() => handleDelete(task.id)} className="w-16 h-5 md:h-7 text-[12px] bg-red-600 hover:opacity-70">Apagar</Button>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    )
}
