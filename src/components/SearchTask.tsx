import { Input } from "./ui/input"

type Props = {
    search: string
    setSearch: (e: string) => void
}

export const SearchTask = ({ search, setSearch }: Props) => {

    return (
        <div className="flex flex-col gap-3 mb-5">
            <div className="text-2xl">Pesquisar: </div>
            <Input placeholder="Pesquisar" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
    )
}