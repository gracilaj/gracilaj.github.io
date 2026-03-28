import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ExperienceDetail } from './pages/ExperienceDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience/:experienceId" element={<ExperienceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
