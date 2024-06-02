import React from 'react'
import { TodoStatus } from '../types'

type TodoListProps = {
  selectedStatus: TodoStatus
  onToggleFilter: (status: TodoStatus) => void
}

const TodoFilter: React.FC<TodoListProps> = ({
  selectedStatus,
  onToggleFilter,
}) => {
  return (
    <div>
      <div>Selected filter: {selectedStatus}</div>
      <div>
        <button onClick={() => onToggleFilter(TodoStatus.ALL)}>All</button>
        <button onClick={() => onToggleFilter(TodoStatus.ACTIVE)}>
          Active
        </button>
        <button onClick={() => onToggleFilter(TodoStatus.COMPLETED)}>
          Completed
        </button>
      </div>
    </div>
  )
}

export default TodoFilter
