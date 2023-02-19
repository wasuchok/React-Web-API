import { Route, Routes } from 'react-router-dom'
import Login_Page from './pages/login/Login_Page'

const routes = (
    <Routes>

        {/* Frontend */}
        <Route path="/" element={<Login_Page />} />
        <Route path="/login" element={<Login_Page />} />
        {/* <Route path="/register" element={<Register_Page />} /> */}

        {/* Backend */}
        {/* <Route path="/backend/dashboard" element={<Dashboard_Page />} /> */}

    </Routes>
)

export default routes