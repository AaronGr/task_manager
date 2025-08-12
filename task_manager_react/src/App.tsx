import './styles/App.css'
import Navbar from './components/Navbar'
import TaskTable from './components/TaskTable'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Navbar />
      <TaskTable />
    </QueryClientProvider>
  )
}

export default App
