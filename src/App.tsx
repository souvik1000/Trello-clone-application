import { HomeNBar } from "./components/NavBar/HomeNBar";
import { SideBar } from "./components/HomePage/SideBar";
import Footer from "./components/Footer/Footer";
import "./styles.css";

export default function App() {
  return (
    // this is our home section or landing page
    // Here, NavBar designed in HomeNBar
    // SideBar providing the whole body
    // Footer is for provide footer in our page
    <div>
      <HomeNBar name="Souvik Ghosh" />
      <SideBar />
      <Footer />
    </div>
  );
}
