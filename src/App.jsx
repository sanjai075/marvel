import Main from "./Components/Main"

import { Routes,Route } from 'react-router-dom'
import Marvel from "./Components/Marvel"
import { BrowserRouter } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Comic from "./Components/Comic"
import ComicCard from "./Components/ComicCard"
import MarvelComic from "./Components/MarvelComic"
import Series from "./Components/Series"
import Footer from "./Components/Footer"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/comic" element={<Comic/>}/>
      <Route path ="/series" element={<Series/>}/>
      <Route path='/:id' element={<Marvel/>}/>
      <Route path="/:id/:title" element={<MarvelComic/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
