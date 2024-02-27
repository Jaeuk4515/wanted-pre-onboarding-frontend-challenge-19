import { useAppDispatch } from "../../store/hooks";
import { deleteTodo, todoList } from "../../store/slices/todoSlice";
import "./List.css";

export default function List({id, todo}: todoList) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="card">
      <p className="card_text">{todo}</p>
      <button className="card_button" onClick={handleDelete}>Delete</button>
    </div>
  )
};