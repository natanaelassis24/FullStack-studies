import { selector } from 'recoil'
import { todoListState } from '../atoms/todoListState'
import { filterState } from '../atoms/filterState'

export const filteredTodoList = selector({
  key: 'filteredTodoList',
  get: ({ get }) => {
    const list = get(todoListState)
    const filter = get(filterState)

    switch (filter) {
      case 'completed':
        return list.filter((item) => item.completed)
      case 'pending':
        return list.filter((item) => !item.completed)
      default:
        return list
    }
  },
})
