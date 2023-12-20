import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from '../pages/home/App';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}