import { React } from 'react'
import './App.scss'
import { Header } from './Components/Header/Header'
import { FirstPage } from './Components/FirstPage/FirstPage'
import { StartSection } from './Components/StartSection/StartSection'

function App() {

  return (
    <>
      <Header/>
      <FirstPage />
      <StartSection />
    </>
  )
}

export default App
