import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { Footer } from "./components/Footer/Footer"
import { BackToTop } from "./components/BackToTop/BackToTop"
import { Newsletter } from "./components/Newsletter/Newsletter"
import { Route, Routes } from "react-router-dom"
import { About } from "./components/About/About"
import { RoomsCatalog } from "./components/RoomsCatalog/RoomsCatalog"
import { AddRoom } from "./components/AddRoom/AddRoom"
import { Testimonials } from "./components/Testimonials/Testimonials"
import { Feedback } from "./components/Feedback/Feedback"
import { Login } from "./components/Sign/Login/Login"
import { Register } from "./components/Sign/Register/Register"
import { Spinner } from "./components/Common/Spinner/Spinner"
import { RoomContextProvider } from "../contexts/RoomContext"

function App() {

    return (
        <div className="container-xxl bg-white p-0">
            <RoomContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/available-rooms" element={<RoomsCatalog />} />
                    <Route path="/add-room" element={<AddRoom />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/send-feedback" element={<Feedback />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                </Routes>

                <Newsletter />
                <Footer />
                <BackToTop />
            </RoomContextProvider>
        </div>
    )
}

export default App
