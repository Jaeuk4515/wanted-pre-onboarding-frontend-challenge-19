import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import { RootState } from './store';
import { useAppSelector } from './store/hooks';

function App() {
  const todos = useAppSelector((state: RootState) => state.todos);

  return (
    <div className="App">
      <header className="title">Todo List</header>
      <main className="todo">
        <Form />
        <section className="todo_list">
          <div className="todo_wrapper">
            {todos.map(({ id, todo }) => <List key={id} id={id} todo={todo} />)}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
