"use client"

import { CreateTask } from "@/components/CreateTask"
import { FilterTask } from "@/components/FilterTask"
import { SearchTask } from "@/components/SearchTask"
import { Tasks } from "@/components/Tasks"
import { Separator } from "@/components/ui/separator"
import { TaskProvider } from "@/context/TaskContext"

const Page = () => {

  return (
    <TaskProvider>
      <div className="bg-[#C1C2C3] w-screen min-h-screen h-full flex flex-col justify-center items-center py-4">
        <h2 className="text-4xl text-[#595b5e] mb-2 font-bold">Lista de Tarefas</h2>
        <div className="max-w-[800px]  min-h-[500px] border border-gray-400 p-4 flex flex-col gap-3 min-[350px]:w-[330px] min-[400px]:w-96 md:w-[600px]">
          <CreateTask />
          <Separator />
          <Tasks />
        </div>
      </div>
    </TaskProvider>
  )
}

export default Page;