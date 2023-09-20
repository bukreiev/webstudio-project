import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from './pages/Home';
import SharedLayout from './components/SharedLayout/SharedLayout';

const Portfolio = lazy(() => import('./pages/Portfolio'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}
