import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Form } from './Components/Form/Form';
import ItemList from './Components/ItemList';
import { ITodo } from './Components/Interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([{ value: 'Task 1', id: 12, isCompleted: false }]);

  const onAddTodos = (value: string) => {
    const newTodo: ITodo = {
      value,
      id: Date.now(),
      isCompleted: false
    }

    setTodos(prev => [newTodo, ...prev])
    console.log(todos);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Form onAddTodos={onAddTodos} />
        <ItemList todos={todos} />
      </div>
    </>
  );
}

export default App;
