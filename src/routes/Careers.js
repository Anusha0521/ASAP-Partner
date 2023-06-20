import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Task from "../components/Task";
import Footer from "../components/Footer";
import AboutImg from "../assets/career3.jpg";
import RegisterCareer from "../components/RegisterCareer";

function Careers() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid "
        heroImg={AboutImg}
        title="Careers"
        btnClass="hide"
      />
      <RegisterCareer />
      <Task />
      <Footer />
    </>
  );
}
export default Careers;
