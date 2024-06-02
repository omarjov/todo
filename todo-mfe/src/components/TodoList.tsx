import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../types'

type TodoListProps = {
  todos: Todo[]
  onToggleCompletion: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleCompletion }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </ul>
  )
}

export default TodoList
