import React from 'react'
import { ITodo } from '../Interfaces'

interface ItemListProps {
    todos: Array<ITodo>
}

export const ItemList: React.FC<ItemListProps> = ({ todos }) => {
    return (

        <ul>
            {todos.map(todo => {
                const { value, id, isCompleted } = todo;
                return (<li className="todo" key={`${id}`}>
                    <label htmlFor={`${id}`}>
                        <input type="checkbox" name="" id={`${id}`} checked={isCompleted} />
                        <span className="todo-item">{value}</span>
                        <i className="material-icons red-text pointer p-l-1">delete</i>
                    </label>
                </li>)
            }

            )}
        </ul>
    )
}
