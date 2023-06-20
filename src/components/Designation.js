import painter1 from "../assets/painter1.jpg";
import painter2 from "../assets/painter2.jpg";
import plumber1 from "../assets/plumber1.jpg";
import plumber2 from "../assets/plumber2.jpg";
import electrician1 from "../assets/electrician.jpg";
import electrician2 from "../assets/electrician2.jpg";
import cleaner1 from "../assets/clean.png";
import cleaner2 from "../assets/cleaner2.jpg";
import DesignationData from "./DesignationData";
import "./DesignationStyles.css";

const Designation = () => {
  return (
    <div className="designation">
      <h1>Current Designations</h1>
      <p>ASAP gives you the opportunity to choose your designation</p>

      <DesignationData
        className="first-des"
        heading="Painter job brief"
        text="We are looking for a skilled Painter to paint the interior and
      exterior of structures, buildings and other surfaces.
      Your job will be important since good painting has both
      practical and aesthetic benefits. An excellent painter is
      knowledgeable in selecting the right material for their job. They
      have experience in painting with various tools and in various
      heights and spaces while observing all safety measures. They must be
      reliable and deft as well as possess great attention to detail in
      completing their duties. The goal is to deliver high-quality
      painting work."
        img1={painter1}
        img2={painter2}
      />
      <DesignationData
        className="first-des-reverse"
        heading="Plumber job brief"
        text="We are looking for an experienced Plumber to efficiently undertake a variety of 
        plumbing tasks ranging from fixing leakages to installing pipes and HVAC systems.
        A successful plumber must have a thorough knowledge of hydraulic systems. 
        They are patient individuals with a practical mind and manual dexterity, able to 
        work efficiently with great attention to detail.
        The goal is to install and maintain well-functioning systems that transport water, waste, 
        gases or hot liquids."
        img1={plumber1}
        img2={plumber2}
      />
      <DesignationData
        className="first-des"
        heading="Electrician job brief"
        text="We are currently hiring an experienced Electrician who will be responsible
        for a wide range of tasks related to the setup and maintenance of electrical infrastructure.
        This includes the installation of electrical wiring in buildings and poles, troubleshooting electrical
        malfunctions and blackouts, and performing repairs on appliances.
        Our overarching goal is to ensure the establishment and upkeep of reliable electrical connections,
        reducing the likelihood of accidents and optimizing the usability of electricity across all facilities.
        Join our team and contribute to a safer and more efficient electrical environment."
        img1={electrician1}
        img2={electrician2}
      />
      <DesignationData
        className="first-des-reverse"
        heading="Cleaner job brief"
        text="We are looking for a Cleaner to take care of our facilities and carry out cleaning and
         maintenance duties.Cleaning, stocking and supplying designated facility areas (dusting, sweeping,
         vacuuming, mopping, cleaning ceiling vents, restroom cleaning etc).
         The goal is to keep homes, flats and building  in a clean and orderly condition."
        img1={cleaner1}
        img2={cleaner2}
      />
    </div>
  );
};
export default Designation;
