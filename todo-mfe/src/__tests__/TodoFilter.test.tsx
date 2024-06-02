import React, { act } from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoFilter from '../components/TodoFilter'
import { TodoStatus } from '../types'

describe('TodoFilter', () => {
  test('renders TodoFilter and updates filter status', () => {
    const setFilterStatus = jest.fn()
    const filterStatus = TodoStatus.ALL
    const { getByText } = render(
      <TodoFilter
        selectedStatus={filterStatus}
        onToggleFilter={setFilterStatus}
      />
    )

    act(() => {
      fireEvent.click(getByText(/Active/i, { selector: 'button' }))
    })
    expect(setFilterStatus).toHaveBeenCalledWith(TodoStatus.ACTIVE)

    act(() => {
      fireEvent.click(getByText(/Completed/i, { selector: 'button' }))
    })
    expect(setFilterStatus).toHaveBeenCalledWith(TodoStatus.COMPLETED)

    act(() => {
      fireEvent.click(getByText(/All/i, { selector: 'button' }))
    })
    expect(setFilterStatus).toHaveBeenCalledWith(TodoStatus.ALL)
  })
})
