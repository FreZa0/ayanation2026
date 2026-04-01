import { BrowserRouter, Routes, Route } from 'react-router'
import { TooltipProvider } from '@/components/ui/tooltip'
import HomePage from './pages/HomePage'
import ExamplePage from './pages/ExamplePage'
import FAQ from './pages/FAQ'
import RegisterPage from './pages/RegisterPage'
import CoursesPage from './pages/CoursesPage'
import ProfilePage from './pages/ProfilePage'
import SignInPage from './pages/SignInPage'
import LessonPage from './pages/LessonPage'
import SettingsPage from './pages/SettingsPage'
import Settings2Page from './pages/Settings2Page'
import Settings3Page from './pages/Settings3Page'
import MessageDemoPage from './pages/MessageDemoPage'
import MessageDemo2Page from './pages/MessageDemo2Page'

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings2" element={<Settings2Page />} />
          <Route path="/settings3" element={<Settings3Page />} />
          <Route path="/message-demo" element={<MessageDemoPage />} />
          <Route path="/message-demo2" element={<MessageDemo2Page />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  )
}
