import React, { useState, useEffect, useCallback } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { Todo, TodoAppProps, TodoStatus } from './types'
import { TODOS_LOCAL_STORAGE_KEY } from './constants'
import TodoFilter from './components/TodoFilter'
import { parseJSON } from './utils'

import './App.css'

const App: React.FC<TodoAppProps> = ({
  listTitle,
  initialTodos,
  onTodosChange,
}) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (initialTodos && Array.isArray(initialTodos)) {
      return initialTodos
    }

    if (typeof localStorage !== 'undefined') {
      const savedTodos = localStorage?.getItem(TODOS_LOCAL_STORAGE_KEY)
      return savedTodos ? parseJSON(savedTodos) || [] : []
    }

    return []
  })

  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<TodoStatus>(TodoStatus.ALL)

  useEffect(() => {
    if (typeof localStorage === 'undefined') {
      setError('LocalStorage is not available.')
      return
    }

    localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos))

    if (onTodosChange) {
      onTodosChange(todos)
    }
  }, [todos, onTodosChange])

  const handleAddTodo = useCallback((description: string) => {
    const newTask: Todo = {
      id: Date.now(),
      description,
      completed: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTask])
  }, [])

  const handleToggleCompletion = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  const filterTodos = useCallback(
    (status: TodoStatus) => {
      if (status === TodoStatus.ALL) {
        return todos
      }
      return todos.filter((todo) =>
        status === TodoStatus.COMPLETED ? todo.completed : !todo.completed
      )
    },
    [todos]
  )

  return (
    <div className="app">
      <h1>{listTitle || 'Todo List'}</h1>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <TodoInput onAddTodo={handleAddTodo} />
          <TodoFilter selectedStatus={status} onToggleFilter={setStatus} />
          <TodoList
            todos={filterTodos(status)}
            onToggleCompletion={handleToggleCompletion}
          />
        </>
      )}
    </div>
  )
}

export default App
