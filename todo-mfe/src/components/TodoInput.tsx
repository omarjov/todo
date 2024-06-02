import React, { useState, useCallback } from 'react'

type TodoInputProps = {
  onAddTodo: (description: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = useCallback(() => {
    if (newTodo.trim()) {
      onAddTodo(newTodo.trim())
      setNewTodo('')
    } else {
      alert('Please enter a task')
    }
  }, [newTodo, onAddTodo])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }, [])

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Enter new task"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TodoInput
