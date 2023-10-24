import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { Footer } from "./components/Footer/Footer"
import { BackToTop } from "./components/BackToTop/BackToTop"
import { Newsletter } from "./components/Newsletter/Newsletter"
import { Route, Routes } from "react-router-dom"
import { About } from "./components/About/About"
import { RoomsCatalog } from "./components/RoomsCatalog/RoomsCatalog"
import { AddRoom } from "./components/AddRoom/AddRoom"

function App() {

  return (
    <div className="container-xxl bg-white p-0">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/available-rooms" element={<RoomsCatalog />} />
        <Route path="/add-room" element={<AddRoom />} />
      </Routes>

      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
