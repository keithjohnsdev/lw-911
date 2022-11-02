import { useState } from "react";

const BloodPressureModal = (props) => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const highlightMetric1 = event => {
      setIsActive1(current => !current);
    };

    const highlightMetric2 = event => {
        setIsActive2(current => !current);
      };
      const highlightMetric3 = event => {
        setIsActive3(current => !current);
      };
  return (
    <div className="bp-modal-relative">
      <div className="x-icon-div" onClick={props.closeModal}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.59961 25.9512C0.697266 26.8535 0.654297 28.4648 1.62109 29.3887C2.54492 30.3555 4.15625 30.3125 5.08008 29.4102L15.5 18.9902L25.8984 29.4102C26.8438 30.334 28.4336 30.3555 29.3574 29.3887C30.3242 28.4648 30.3027 26.8535 29.3789 25.9297L18.959 15.5098L29.3789 5.11133C30.3027 4.16602 30.3242 2.57617 29.3574 1.65234C28.4336 0.685547 26.8438 0.707031 25.8984 1.63086L15.5 12.0508L5.08008 1.63086C4.15625 0.728516 2.54492 0.685547 1.62109 1.65234C0.654297 2.57617 0.697266 4.1875 1.59961 5.08984L12.0195 15.5098L1.59961 25.9512Z"
            fill="#1B93C5"
          />
        </svg>
      </div>
      <div className="bp-modal-flex">
        <div className="bp-header">Blood Pressure (mmHg)</div>
        <div className="bp-body">
            <div className="time-period-banner">Last 24 Hrs</div>
            <div className="bp-graph">
                <img src={require("../../../theme/assets/graph-area.png")} alt="blood pressure graph" />
            </div>
            <div className="bp-readings">
                <div className="bp-reading"  onClick={highlightMetric1}>
                    <div className="reading-info">Jan 1, 11:08 AM - <span style={{color: "#1B93C5"}}>Withings Scale</span></div>
                    <div className={isActive1 ? 'reading-measurement red' : 'reading-measurement'}>167 / 94</div>
                </div>
                <div className="bp-reading" onClick={highlightMetric2}>
                    <div className="reading-info">Jan 1, 10:26 AM - Manual Entry</div>
                    <div className={isActive2 ? 'reading-measurement red' : 'reading-measurement'}>144 / 72</div>
                </div>
                <div className="bp-reading" onClick={highlightMetric3}>
                    <div className="reading-info">Jan 1, 9:12 AM - <span style={{color: "#1B93C5"}}>Withings Scale</span></div>
                    <div className={isActive3 ? 'reading-measurement red' : 'reading-measurement'}>155 / 88</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureModal;
