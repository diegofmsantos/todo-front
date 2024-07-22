"use client"

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";

export const CreateTask = () => {

    const taskCtx = useContext(TaskContext)

    const [inputTask, setInputTask] = useState('')
    const [selectTask, setSelectTask] = useState('')

    const handleAdd = () => {
        if (!inputTask || inputTask.trim() === '' || !selectTask) return false

        taskCtx?.addTask(inputTask, selectTask)

        setInputTask('')
        setSelectTask('')

    }

    return (
        <div className="flex flex-col gap-3 my-3">
            <h3 className="text-2xl">Criar tarefa: </h3>
            <Input placeholder="Digite o título da tarefa" value={inputTask} onChange={e => setInputTask(e.target.value)} />
            <Select value={selectTask} onValueChange={value => setSelectTask(value)}>
                <SelectTrigger className="w-[210px]">
                    <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="estudo">Estudo</SelectItem>
                        <SelectItem value="pessoal">Pessoal</SelectItem>
                        <SelectItem value="trabalho">Trabalho</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button className="w-40 h-8 bg-blue-500" onClick={handleAdd}>Criar</Button>
        </div>
    )
}