import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import CourseDetail from './pages/CourseDetail';
import Lesson from './pages/Lesson';
import MyLearning from './pages/MyLearning';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/courses/:slug/lessons/:lessonId" element={
              <>
                <SignedIn><Lesson /></SignedIn>
                <SignedOut><RedirectToSignIn /></SignedOut>
              </>
            } />
            <Route path="/my-learning" element={
              <>
                <SignedIn><MyLearning /></SignedIn>
                <SignedOut><RedirectToSignIn /></SignedOut>
              </>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
