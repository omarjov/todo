import React from 'react'
import { Todo } from '../types'

type TodoItemProps = {
  todo: Todo
  onToggleCompletion: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleCompletion }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleCompletion(todo.id)}
        />
        {todo.description}
      </label>
    </li>
  )
}

export default TodoItem
