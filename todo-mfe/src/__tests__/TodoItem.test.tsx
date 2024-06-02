import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react'
import TodoItem from '../components/TodoItem'
import { Todo } from '../types'

describe('TodoItem', () => {
  test('renders TodoItem and toggles completion', () => {
    const todo: Todo = { id: 1, description: 'Test Todo', completed: false }
    const onToggleCompletion = jest.fn()
    const { getByText, getByRole } = render(
      <TodoItem todo={todo} onToggleCompletion={onToggleCompletion} />
    )

    act(() => {
      fireEvent.click(getByRole('checkbox'))
    })

    expect(onToggleCompletion).toHaveBeenCalledWith(1)
    expect(getByText(/test todo/i)).toHaveStyle('text-decoration: none')
  })
})
