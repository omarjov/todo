export type Todo = {
  id: number
  description: string
  completed: boolean
}

export type TodoAppProps = {
  listTitle?: string
  initialTodos?: Todo[]
  onTodosChange?: (todos: Todo[]) => void
}

export enum TodoStatus {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}
