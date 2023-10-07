import { type TodoTitle } from '../type'
import { useState } from 'react'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSumit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSumit} >
      <input
        className='new-todo'
        value={inputValue}
        onChange={(evt) => { setInputValue(evt.target.value) }}
        placeholder='Que quieres hacer?'
        autoFocus
      />
    </form>
  )
}
