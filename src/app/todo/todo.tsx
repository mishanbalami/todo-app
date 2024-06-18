import Search from "../../components/search";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const toggleCompleted = (id) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoList(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = todoList.filter((item) => item.id !== id);

    setTodoList(newTodos);
  };
  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
    
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <Search />
      <TodoList
        todoList={todoList}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}