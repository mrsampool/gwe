import React from "react";

// Style Sheet
import "./sally.css";

// Images
import SallyBody from "./SallyBody.png";
import SallyLeftArm from "./SallyLeftArm.png";
import SallyRightArm from "./SallyRightArm.png";
import SallyTail from "./SallyTail.png";
import SallyLeftFoot from "./SallyLeftFoot.png";
import SallyRightFoot from "./SallyRightFoot.png";

// Data
import pageText from "../../data/pageText";

class Sally extends React.Component {
  constructor(props) {
    super(props);
    this.getSpeech = this.getSpeech.bind(this);
  }
  getSpeech() {
    return pageText.speechBubbles.getSpeech(
      this.props.message,
      this.props.language
    );
  }
  render() {
    return (
      <div className={`sallyBubbleWrap ${this.props.addlClass}`}>
        <div className="speechBubble" id="sallySpeechBubble">
          <p>{this.getSpeech()}</p>
        </div>

        <div className="sally">
          <img src={SallyRightArm} id="sallyRightArm" alt={""} />
          <img src={SallyLeftArm} id="sallyLeftArm" alt={""} />
          <img src={SallyRightFoot} id="sallyRightFoot" alt={""} />
          <img src={SallyLeftFoot} id="sallyLeftFoot" alt={""} />
          <img src={SallyTail} id="sallyTail" alt={""} />
          <img src={SallyBody} id="sallyBody" alt={""} />
        </div>
      </div>
    );
  }
}
export default Sally;
