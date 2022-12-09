import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import { PAGES } from "../../utilities/main-pages";
import "./Layout.css";

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="layout__container">
      <header className="head">
        <Navbar pages={PAGES} />
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="foot">
       
      </footer>
    </div>
  );
}
/* <div className="layout__container">
<Navbar pages={PAGES} />
{children}
<Footer area="footer" />
</div> */