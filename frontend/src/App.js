import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para armazenar a lista de tarefas
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");  // Estado para a nova tarefa

  // Função para adicionar um item à lista
  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");  // Limpar o campo de entrada
    }
  };

  // Função para marcar a tarefa como concluída
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Função para excluir a tarefa
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Adicione uma tarefa"
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
