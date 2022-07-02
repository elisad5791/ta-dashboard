import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppHeader from './AppHeader.js';
import RepositoryPage from './repository/RepositoryPage.js';
import SearchPage from './search/SearchPage.js';
import AppFooter from './AppFooter.js';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="repository/:complexId" element={<RepositoryPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
