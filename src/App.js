import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppHeader from './AppHeader.js';
import RepositoryPage from './repository/RepositoryPage.js';
import SearchPage from './search/SearchPage.js';
import AppFooter from './AppFooter.js';

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="repository/:complexId" element={<RepositoryPage />} />
        </Routes>
      </main>
      <AppFooter />
    </BrowserRouter>
  );
}

export default App;
