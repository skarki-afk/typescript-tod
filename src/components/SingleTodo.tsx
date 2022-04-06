import React, {useState,useRef, useEffect} from "react"
import { Todo } from "../model"
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"
import {BiCheck} from "react-icons/bi"

type Props ={
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo =({todo, todos, setTodos}: Props)=>{
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo]= useState<string>(todo.todo)


    const handleDone =(id:number)=>{
        setTodos(prevTodos=> prevTodos.map(item=> (
            item.id === id? {...item, isDone: !item.isDone} : item
        )))
    }
    const handleDelete =(id: number)=>{
        setTodos(prevTodos => prevTodos.filter(todo=> todo.id !== id))
    }
    const handleEdit =(e: React.FormEvent, id: number)=>{
        e.preventDefault();
        setTodos(prevTodos => prevTodos.map(item=> item.id === id?{...item, todo: editTodo}: item))
        setEdit(false)
    }
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])
    return(
        <form className="flex mr-2 mb-2 bg-white w-11/12 p-4 rounded-lg mt-5 md:w-1/4 " onSubmit={(e)=>handleEdit(e,todo.id)}>
                {
                    edit? 
                    <input
                    ref= {inputRef}
                    value={editTodo} 
                    onChange={(e)=>setEditTodo(e.target.value)}
                    className="h-6 bg-gray-300 outline-none"/>
                    :
                    todo.isDone?   
                        <s className="grow ">{todo.todo}</s>
                        :
                        <span className="grow ">{todo.todo}</span>
                    
                }
            <div className="flex items-start justify-end">
                <span className="mx-1 cursor-pointer" 
                onClick={()=>{
                if (!edit && !todo.isDone){
                    setEdit(!edit)
                }
                else{
                    setEdit(!edit)
                }
                    }
                }
                
                ><AiFillEdit/></span>
                <span className="mx-1 cursor-pointer" onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
                <span className="mx-1 cursor-pointer" onClick={()=>handleDone(todo.id)}><BiCheck/></span>
            </div>
        </form>
    )
}

export default SingleTodo