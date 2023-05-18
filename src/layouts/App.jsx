import Footer from "../components/Footer/footer";
import NavTop from "../components/NavbarTop/navtop";
import About from "./about";
import Disclaimer from "../layouts/desclaimer";
import TermsAndConditions from "./terms and conditions";
const App = () => {
  return (
    <>
      {/* <NavTop /> */}
      <div className="content">
        {/* <About /> */}
        {/* < Disclaimer /> */}
        <TermsAndConditions />
      </div>
      <Footer/>
    </>
  );
};

export default App;
