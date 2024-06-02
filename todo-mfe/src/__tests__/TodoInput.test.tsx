import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react'
import TodoInput from '../components/TodoInput'

describe('TodoInput', () => {
  test('renders TodoInput and adds a new todo', () => {
    const onAddTodo = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <TodoInput onAddTodo={onAddTodo} />
    )

    act(() => {
      fireEvent.change(getByPlaceholderText(/enter new task/i), {
        target: { value: 'New Task' },
      })
    })

    act(() => {
      fireEvent.click(getByText(/add/i))
    })

    expect(onAddTodo).toHaveBeenCalledWith('New Task')
  })

  test('shows alert when trying to add an empty task', () => {
    const handleAddTodo = jest.fn()
    jest.spyOn(window, 'alert').mockImplementation()

    const { getByText } = render(<TodoInput onAddTodo={handleAddTodo} />)

    const button = getByText(/Add/i)

    act(() => {
      fireEvent.click(button)
    })

    expect(window.alert).toHaveBeenCalledWith('Please enter a task')
  })
})
