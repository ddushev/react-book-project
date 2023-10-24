import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { Footer } from "./components/Footer/Footer"
import { BackToTop } from "./components/BackToTop/BackToTop"
import { Newsletter } from "./components/Newsletter/Newsletter"

function App() {

  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <Home />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
