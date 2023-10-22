import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CustomNavbar from './Component/Navbar'
import Landing from './Component/Landing'
import Cards from './Component/Cards'
import Footer from './Component/Footer'

function App() {

  return (
    <>
      <CustomNavbar />
      <Landing />
      <Cards />
      <Footer />
    </>
  )
}

export default App
