import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import NewVideo from "./pages/NewVideo"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="new-video" element={<NewVideo />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;