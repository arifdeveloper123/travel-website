import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Camp from "../../components/Camp";
import Guide from "../../components/Guide";
import Features from "../../components/Features";
import GetApp from "../../components/GetApp";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    <Footer/>
    </div>
  );
}
