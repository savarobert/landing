import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { Grid2 } from '@mui/material'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <Grid2 container direction="column">
        <Grid2 className="NavBar" size={3}>
          <NavBar />
        </Grid2>
        <Grid2 container spacing={2} direction="row" size={9} justifyContent="center">
          <Grid2 size={12}>
            <Header />
          </Grid2>
          <Grid2 size={12}>
            <Body />
          </Grid2>
          <Grid2 size={12}>
            <Footer />
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  )
}

export default App
