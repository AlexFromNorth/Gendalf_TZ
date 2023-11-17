import './App.css'
import { Box } from '@mui/material'
import Header from './components/header/header'
import Welcome from './components/welcome/Welcome'
import Tasks from './components/tasks/Tasks'
import Priorities from './components/priorities/Priorities'
import Infrastructure from './components/infrastructure/Infrastructure'

function App() {


  return (
    <>
      <Box >
        <Header/>
        <Welcome/>
        <Tasks/>
        <Priorities/>
        <Infrastructure/>
      </Box>

    </>
  )
}

export default App
