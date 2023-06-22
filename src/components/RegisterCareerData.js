import "./RegisterCareerStyles.css";

function RegisterCareerData(props) {
  return (
    <div className="r-card">
      <div className="r-image">
        <img src={props.image} alt="images" />
      </div>
      {/* <h4>{props.heading}</h4> */}
      <button>{props.button}</button>
      <p>{props.text}</p>
    </div>
  );
}
export default RegisterCareerData;
