import React from 'react'
import { ITodo } from '../Interfaces'

interface ItemListProps {
    todos: Array<ITodo>,
    onCheckTodos(id: number): void,
    onDeleteTodos(id: number): void
}

export const ItemList: React.FC<ItemListProps> = ({ todos, onCheckTodos,
    onDeleteTodos }) => {
    if (!todos.length) {
        return <p className="center fz-1-2">There are no tasks yet!</p>
    }
    return (
        <ul>
            {todos.map(todo => {
                const { value, id, isCompleted } = todo;
                const classes = ['todo-value', 'fz-1-2'];
                if (isCompleted) {
                    classes.push('completed');
                }

                return (<li className="todo" key={`${id}`}>
                    <label
                        htmlFor={`${id}`}
                        className="p-lr-1"
                    >
                        <input
                            type="checkbox"
                            name=""
                            id={`${id}`}
                            checked={isCompleted}
                            onChange={() => onCheckTodos(id)}
                        />
                        <span className={classes.join(' ')}>{value}</span>
                        <i
                            className="material-icons red-text pointer p-l-1"
                            onClick={() => onDeleteTodos(id)}
                        >delete</i>
                    </label>
                </li>)
            }
            )}
        </ul>
    )
}
