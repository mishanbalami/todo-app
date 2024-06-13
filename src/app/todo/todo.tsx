import Button from "../../components/button";
import Search from "../../components/search";
import TodoList from "./todo-list";

export default function Todo() {
  return (
    <div>
      <Search />
      <TodoList />
      <Button title="Add me" />
    </div>
  );
}
