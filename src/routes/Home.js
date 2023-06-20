import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Designation from "../components/Designation";
import Task from "../components/Task";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1303371086/vector/repairman-team-of-people-set-happy-workers-of-maintenance-repair-service-standing.jpg?s=612x612&w=0&k=20&c=Ywv9ZZY9WtDbNK5myMZ1N8XsAi4CmdJlbKsWCYrUOFY="
        title="Your Career Your Story "
        text="Choose your Career"
        buttonText="Careers"
        url="/careers"
        btnClass="show"
      />
      <Designation />
      <Task />
      <Footer />
    </>
  );
}
export default Home;
