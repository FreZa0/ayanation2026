import { BrowserRouter, Routes, Route } from 'react-router'
import { TooltipProvider } from '@/components/ui/tooltip'
import HomePage from './pages/HomePage'
import ExamplePage from './pages/ExamplePage'

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example" element={<ExamplePage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  )
}
