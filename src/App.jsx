import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
