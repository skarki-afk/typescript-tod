import React, { useRef } from "react";

interface Props{
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleClick: (e: React.FormEvent)=> void;
}


const SearchBar=({todo, setTodo,handleClick}: Props)=>{
    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <form className="flex justify-center text-white w-full  relative items-center"
        onSubmit={(e)=>
           { handleClick(e);
            inputRef.current?.blur()}
        }
        > 
            <input 
            className="rounded-3xl shadow-3xl focus:shadow-4xl outline-none px-2 py-3 w-full text-black duration-200" type="input"
            placeholder="Enter a Task"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
             />
            <button className="rounded-full bg-violet-400 absolute h-8 w-8 m-3 duration-200 transition-all text-sm right-0 shadow-input hover:bg-violet-500 focus:scale-90 focus:shadow-input-focus" type="submit">
                Go
            </button>
        </form>
    )
}

export default SearchBar