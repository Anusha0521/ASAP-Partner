import "./RegisterCareerStyles.css";
import painter1 from "../assets/painter1.jpg";
import plumber1 from "../assets/plumber1.jpg";
import electrician from "../assets/electrician.jpg";
import clean from "../assets/clean.png";
import RegisterCareerData from "./RegisterCareerData.js";

function RegisterCareer() {
  return (
    <div className="register">
      <h1>Register As</h1>
      <p>Explore the careers and register</p>
      <div className="registerCard">
        <RegisterCareerData
          image={painter1}
          // heading="Painter"
          button="Painter"
          text="Know Painting? We have an opportunity for you."
        />
        <RegisterCareerData
          image={plumber1}
          // heading="Plumber"
          button="Plumber"
          text="Know Plumbing? We have an opportunity for you."
        />
        <RegisterCareerData
          image={electrician}
          // heading="Electrician"
          button="Electrician"
          text="Know Electricals? We have an opportunity for you."
        />
        <RegisterCareerData
          image={clean}
          // heading="Cleaner"
          button="Cleaner"
          text="Know Cleaning? We have an opportunity for you."
        />
      </div>
    </div>
  );
}

export default RegisterCareer;
