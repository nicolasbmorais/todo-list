import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { TaskLenght } from "./components/TasksLenght";
import { TodoListTileComponent } from "./components/TodoListTile";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const todoTitle = data.get("title")?.toString() ?? "";

    if (!todoTitle) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: todoTitle,
      completed: false,
    };

    const existeTodoComMesmoTitulo = todos.some(
      (todo) => todo.title === newTodo.title
    );

    if (!existeTodoComMesmoTitulo) {
      setTodos([...todos, newTodo]);
    }
  }

  function deleteAllTodos() {
    setTodos([]);
  }

  function deleteTodo(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-400 overflow-y-scroll">
      <div className="bg-white p-5 rounded  flex-col">
        <h1 className="font-bold font-mono text-4xl">Todo App</h1>
        <div className="my-4">
          <form onSubmit={addTodo} className="flex items-center">
            <input
              type="text"
              name="title"
              className="border rounded mr-2 px-3 text-3xl h-10 placeholder:text-xl"
              placeholder="Adicione seu novo Todo"
            />
            <button
              type="submit"
              className="items-center hover:bg-violet-700 bg-violet-500 justify-center text-white rounded p-2"
            >
              <Plus />
            </button>
          </form>
        </div>

        {todos.map((item, index) => {
          return (
            <TodoListTileComponent
              key={item.id}
              name={item.title}
              handleDelete={() => deleteTodo(index)}
            />
          );
        })}

        <TaskLenght taskLenght={todos.length} onClear={deleteAllTodos} />
      </div>
    </div>
  );
}
