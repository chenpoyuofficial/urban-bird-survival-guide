import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import UnderConstruction from "./pages/UnderConstruction"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<UnderConstruction />} />
    </Routes>
  )
}

export default App