import { BrowserRouter,Route,Routes } from "react-router-dom"
import MainPages from "./pages/MainPages"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = '/' element={<MainPages/>} />
      <Route path = '/movie/:movieId' element = {<DetailPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
