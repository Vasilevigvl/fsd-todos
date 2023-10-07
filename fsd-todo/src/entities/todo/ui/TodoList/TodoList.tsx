import { useMemo } from 'react';
import { Todo } from '../../model/types';

interface TodoListProps {
    todolist: Todo[];
}

export const TodoList = ({todolist}: TodoListProps) => {
    const isTodoListEmpty = todolist.length

    const todos = useMemo(() => {
        return isTodoListEmpty ? todolist.map((todo) => {
            return (
                <div key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.completed ? "Готово" : "Не готово"}</div>
                </div>
            )
        }) : <div>Нету текущих дел</div>
    }, [todolist])

    return (
        <div>
            {todos}
        </div>
    )
}
