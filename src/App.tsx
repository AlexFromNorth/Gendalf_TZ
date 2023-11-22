import './App.css'
import './media.css'

import { Box } from '@mui/material'
import Header from './components/header/header'
import Welcome from './components/welcome/Welcome'
import Tasks from './components/tasks/Tasks'
import Priorities from './components/priorities/Priorities'
import Infrastructure from './components/infrastructure/Infrastructure'
import Student from './components/student/Student'
import Answers from './components/answers/Answers'
import Form from './components/form/Form'
import HeaderMobile from './components/header/HeaderMobile'

function App() {


  return (
    <>
      <Box >
        <Header/>
        <HeaderMobile/>
        <Welcome/>
        <Tasks/>
        <Priorities/>
        <Infrastructure/>
        <Student/>
        <Answers/>
        <Form/>
      </Box>

    </>
  )
}

export default App
