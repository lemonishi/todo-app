import { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          "http://localhost:3000/api/todos",
          fetchOptions
        );
        const json = await response.json();
        setTodos(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {todos &&
        (todos as any).map((todo: any) => <p key={todo._id}>{todo.title}</p>)}
    </div>
  );
}

export default TodoList;
