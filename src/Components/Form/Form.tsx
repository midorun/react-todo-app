import React, { useState } from 'react'

interface FormProps {
    onAddTodos(newTodo: string): void;
}

export const Form: React.FC<FormProps> = ({ onAddTodos }) => {
    const [value, setValue] = useState<string>('')

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const submitInputValue = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAddTodos(value);
            setValue('');
        }

    }

    return (
        <div className="input-field m-t-2">
            <input
                onChange={onValueChange}
                onKeyPress={submitInputValue}
                value={value}
                type="text"
                name=""
                id="title" />
            <label htmlFor="title" className="active">
                Insert the task name
            </label>
        </div>
    )
}