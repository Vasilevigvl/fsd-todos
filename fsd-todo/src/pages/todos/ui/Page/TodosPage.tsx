import { useGetTodosQuery } from "@/entities/todo/api/api"
import { TodoList } from "@/entities/todo/ui/TodoList/TodoList"


export const TodosPage = () => {
    const {data: todos=[]} = useGetTodosQuery()

    console.log(todos)
    
    return (
        <div>
            <TodoList todolist={todos}/>
        </div>
    )
}
