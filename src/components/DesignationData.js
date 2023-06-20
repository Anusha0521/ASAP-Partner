import { Component } from "react";
import "./DesignationStyles.css";
// import painter1 from "../assets/painter1.jpg";
// import painter2 from "../assets/painter2.jpg";

class DesignationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DesignationData;
