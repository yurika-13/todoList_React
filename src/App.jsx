import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInCompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  function getText(e) {
    setTodoText(e.target.value);
  }

  // const addText () => {}
  function addText() {
    if (todoText === "") {
      alert("入力してください");
    } else {
      const newTodos = [...incompleteTodos, todoText];
      setInCompleteTodos(newTodos);
      setTodoText("");
    }
  }

  function deleteText(index) {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  }

  function completeText(index) {
    const newTodos = [...incompleteTodos];
    const deleteList = newTodos.filter((item, k) => k !== index);
    setInCompleteTodos(deleteList);
    // (どちらでも可)const addCompleteTodo = newTodos.filter((item, k) => k === index);
    const addCompleteTodo = incompleteTodos[index];
    const newCompleteList = [...completeTodos, addCompleteTodo];
    setCompleteTodos(newCompleteList);
  }

  function removeText(index) {
    const newCompleteList = [...completeTodos];
    newCompleteList.splice(index, 1);
    setCompleteTodos(newCompleteList);
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setInCompleteTodos(newTodos);
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={getText} />
        <button onClick={addText}>追加</button>
      </div>
      <div className="imconprete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => completeText(index)}>完了</button>
                <button onClick={() => deleteText(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="conprete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todos, index) => {
            return (
              <div key={todos} className="list-row">
                <li>{todos}</li>
                <button onClick={() => removeText(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
