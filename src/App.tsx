import './App.css'
import { Box } from '@mui/material'
import Header from './components/header/header'
import Welcome from './components/welcome/Welcome'
import Tasks from './components/tasks/Tasks'
import Priorities from './components/priorities/Priorities'
import Infrastructure from './components/infrastructure/Infrastructure'
import Student from './components/student/Student'
import Answers from './components/answers/Answers'

function App() {


  return (
    <>
      <Box >
        <Header/>
        <Welcome/>
        <Tasks/>
        <Priorities/>
        <Infrastructure/>
        <Student/>
        <Answers/>
      </Box>

    </>
  )
}

export default App
