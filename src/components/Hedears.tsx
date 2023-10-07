import { CreateTodo } from './CreateTodo'
import { type TodoTitle } from '../type'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <CreateTodo saveTodo={onAddTodo}/>
    </header>
  )
}
