import { React } from 'react'
import './App.scss'
import { Header } from './Components/Header/Header'
import { MenuContextProvider } from './Components/MenuContext/MenuContext'

// import { FirstPage } from './Components/FirstPage/FirstPage'
// import { StartSection } from './Components/StartSection/StartSection'
// import { PartnersSection } from './Components/PartnersSection/PartnersSection'
// import { AppsSection } from './Components/AppsSection/AppsSection'
// import { Footer } from './Components/Footer/Footer'

function App() {

  return (
    <MenuContextProvider>
      <Header/>
      {/* <FirstPage />
      <StartSection />
      <PartnersSection />
      <AppsSection />
      <Footer /> */}
    </MenuContextProvider>
    
  )
}

export default App
