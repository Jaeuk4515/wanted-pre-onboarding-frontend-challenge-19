import { useEffect, useState } from "react";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./Form.css";
import { addTodo } from "../../store/slices/todoSlice";

export default function Form() {
  const todos = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();
  const [ text, setText ] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ id: todos.length + 1, todo: text }));
    setText("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form_input" value={text} onChange={handleChange} />
      <button className="form_button">Add</button>
    </form>
  )
}