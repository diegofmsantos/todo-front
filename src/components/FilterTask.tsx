import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
    filter: string
    setFilter: (e: string) => void
}

export const FilterTask = ({ filter, setFilter }: Props) => {

    return (
        <div className="flex flex-col gap-3 my-5">
            <div className="text-2xl">Filtrar:</div>
            <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[210px]">
                    <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="Todas">Todas</SelectItem>
                        <SelectItem value="Completas">Completas</SelectItem>
                        <SelectItem value="Incompletas">Incompletas</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}