import { Link } from "react-router-dom";
import './css/AppHeader.css';

function AppHeader() {
  return (
    <header className="header">
      <Link to="/" className="header__link">Github - Панель управления</Link>
    </header>
  );
}

export default AppHeader;
