import { Todo } from "../model"
import SingleTodo from "./SingleTodo"

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList =({todos, setTodos}:Props)=>{
    return(
        <span className="flex justify-evenly flex-wrap">
            {todos.map((items)=>{
                return(
                    <SingleTodo
                        key={items.id}
                        todo={items}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )
            })}
        </span>
    )
}

export default TodoList