import { useRecoilValue } from 'recoil'
import { todoListState } from './atoms/todoListState'
import { filterState } from './atoms/filterState'

export default function DebugState() {
  const list = useRecoilValue(todoListState)
  const filter = useRecoilValue(filterState)

  return (
    <div style={{ padding: '1rem', backgroundColor: '#eee', marginTop: '1rem' }}>
      <h3>Estado para Debug</h3>
      <p><strong>Filtro atual:</strong> {filter}</p>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  )
}
