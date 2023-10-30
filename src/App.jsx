import { AuthContextProvider } from "./contexts/AuthContext"
import { RoomContextProvider } from "./contexts/RoomContext"
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
import Logout from "./components/Logout/Logout"
import { RoomDetails } from "./components/RoomDetails/RoomDetails"
import { EditRoom } from "./components/EditRoom/EditRoom"

import { Spinner } from "./components/Common/Spinner/Spinner"


function App() {

    return (
        <div className="container-xxl bg-white p-0">
            <AuthContextProvider>
                <RoomContextProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/available-rooms" element={<RoomsCatalog />} />
                        <Route path="/available-rooms/:roomId/details" element={<RoomDetails />} />
                        <Route path="/available-rooms/:roomId/edit" element={<EditRoom />} />
                        <Route path="/add-room" element={<AddRoom />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/send-feedback" element={<Feedback />} />
                        <Route path="/sign-in" element={<Login />} />
                        <Route path="/sign-up" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>

                    <Newsletter />
                    <Footer />
                    <BackToTop />
                </RoomContextProvider>
            </AuthContextProvider>
        </div>
    )
}

export default App
