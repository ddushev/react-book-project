import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { BackToTop } from "./components/Common/BackToTop"
import { Spinner } from "./components/Common/Spinner"
import { Carousel } from "./components/Home/Carousel/Carousel"
import { Booking } from "./components/Home/Booking/Booking"

function App() {

  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <Carousel />
      <Booking />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
