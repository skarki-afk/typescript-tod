import React,{useState} from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import { Todo } from './model';
import TodoList from './components/TodoList';



const App: React.FC=()=> {
  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);
  const handleClick =(e: React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  return (
    <div className='w-screen h-full bg-violet-400 flex flex-col z-10 px-6 align-center md:h-screen'>
      <div className="flex justify-center uppercase header text-3xl py-2 text-white md:py-4 md:text-4xl">
        tasker
      </div>
      <SearchBar
      todo={todo}
      setTodo = {setTodo}
      handleClick={handleClick}
      />
      <TodoList
      todos={todos}
      setTodos ={setTodos}
      />
    </div>
  );
}

export default App;
