import { type TodoId, type Todo as TodoType } from '../type'

interface Props extends TodoType {
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
        <div className='view'>
            <input
            className='toggle'
            checked={completed}
            type='checkbox'
            onChange={(e) => {
              onToggleCompleteTodo({ id, completed: e.target.checked })
            }}
            />
            <button
            className='destroy'
            onClick={() => { onRemoveTodo({ id }) }}/>
            <label>{title}</label>
        </div>
  )
}
