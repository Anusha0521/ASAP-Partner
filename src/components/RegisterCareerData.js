import "./RegisterCareerStyles.css";

function RegisterCareerData(props) {
  return (
    <div className="r-card">
      <div className="r-image">
        <img src={props.image} alt="images" />
      </div>
      {/* <h4>{props.heading}</h4> */}
      <a href={props.url} className={props.btnClass}>
        {props.buttonText}
      </a>
      {/* <button>{props.button}</button> */}
      <h4>{props.text}</h4>
    </div>
  );
}
export default RegisterCareerData;
