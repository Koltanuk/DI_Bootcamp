import Tasks from '../features/state/tasks/Tasks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tasks></Tasks>
    </>
  )
}

export default App
