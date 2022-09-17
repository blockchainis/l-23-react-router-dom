import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <header>
        <h1>BLACKPINK</h1>
      </header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="./jenny">
            <li>제니</li>
          </Link>
          <Link to="./jisoo">
            <li>지수</li>
          </Link>
          <Link to="./lisa">
            <li>리사</li>
          </Link>
          <Link to="./rose">
            <li>로제</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2022 BLACKPINK</p>
      </footer>
    </div>
  );
}
