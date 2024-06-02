import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import App from '../App'
import { Todo } from '../types'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    clear: () => {
      store = {}
    },
    removeItem: (key: string) => {
      delete store[key]
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('App', () => {
  test('renders error message if localStorage is not available', () => {
    const originalLocalStorage = window.localStorage
    delete (window as any).localStorage

    act(() => {
      render(<App />)
    })

    expect(
      screen.getByText(/LocalStorage is not available/i)
    ).toBeInTheDocument()

    Object.defineProperty(window, 'localStorage', {
      value: originalLocalStorage,
    })
  })

  test('renders todos from initialTodos prop', () => {
    const initialTodos: Todo[] = [
      { id: 1, description: 'Test Todo 1', completed: false },
      { id: 2, description: 'Test Todo 2', completed: true },
    ]

    act(() => {
      render(<App initialTodos={initialTodos} />)
    })

    expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Test Todo 2/i)).toBeInTheDocument()
  })

  test('filters todos based on status', () => {
    const initialTodos: Todo[] = [
      { id: 1, description: 'Todo 1', completed: false },
      { id: 2, description: 'Todo 2', completed: true },
    ]

    act(() => {
      render(<App initialTodos={initialTodos} />)
    })

    act(() => {
      fireEvent.click(screen.getByText(/Active/i))
    })
    expect(screen.getByText(/Todo 1/i)).toBeInTheDocument()
    expect(screen.queryByText(/Todo 2/i)).toBeNull()

    act(() => {
      fireEvent.click(screen.getByText(/Completed/i))
    })
    expect(screen.queryByText(/Todo 1/i)).toBeNull()
    expect(screen.getByText(/Todo 2/i)).toBeInTheDocument()

    act(() => {
      fireEvent.click(screen.getByText(/All/i))
    })
    expect(screen.getByText(/Todo 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Todo 2/i)).toBeInTheDocument()
  })
})
