import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App'
import Setting from './pages/Setting';
import Status from './pages/Status';
import Report from './pages/Report';
import MainPage from './pages/MainPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/status" element={<Status />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
