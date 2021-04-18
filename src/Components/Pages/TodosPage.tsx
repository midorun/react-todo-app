import React, { useState, useEffect } from 'react'
import Form from '../Form'
import ItemList from '../ItemList'
import { ITodo } from '../Interfaces';

export default function TodosPage() {
    const [todos, setTodos] = useState<Array<ITodo>>(
        [
            {
                value: 'Task 1',
                id: 12,
                isCompleted: true
            }
        ]
    );

    useEffect(() => {
        const localTodos: Array<ITodo> = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(localTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const onAddTodos = (value: string) => {
        const newTodo: ITodo = {
            value,
            id: Date.now(),
            isCompleted: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const onCheckTodos = (id: number) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
        );
    }

    const onDeleteTodos = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    return (
        <>
            <Form onAddTodos={onAddTodos} />
            <ItemList
                todos={todos}
                onCheckTodos={onCheckTodos}
                onDeleteTodos={onDeleteTodos}
            />
        </>
    )
}
