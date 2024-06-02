import React from 'react'
import { render } from '@testing-library/react'
import TodoList from '../components/TodoList'
import { Todo } from '../types'

const todos: Todo[] = [
  { id: 1, description: 'Todo 1', completed: false },
  { id: 2, description: 'Todo 2', completed: true },
  { id: 3, description: 'Todo 3', completed: true },
]

describe('TodoList', () => {
  test('renders TodoList and filters todos', () => {
    const onToggleCompletion = jest.fn()

    const { getAllByRole } = render(
      <TodoList todos={todos} onToggleCompletion={onToggleCompletion} />
    )

    expect(getAllByRole('listitem')).toHaveLength(3)
  })
})
