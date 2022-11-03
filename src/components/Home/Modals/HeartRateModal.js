import { useState } from "react";

const HeartRateModal = (props) => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const highlightMetric = i => {
      if (i === 1) {
        setIsActive1(current => !current);
      } else if (i === 2) {
        setIsActive2(current => !current);
      } else if (i === 3) {
        setIsActive3(current => !current);
      }
    };
  return (
    <div className="modal-relative">
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
      <div className="modal-flex">
        <div className="header">Heart Rate (bpm)</div>
        <div className="body">
            <div className="time-period-banner">Last 24 Hrs</div>
            <div className="modal-img fda-img-wrapper">
                <img src={require("../../../theme/assets/heart-rate.png")} alt="heart rate graph" />
            </div>
            <div className="bp-readings">
                <div className="bp-reading"  onClick={() => highlightMetric(1)}>
                    <div className="reading-info">Jan 1, 10:08 AM - Wearable Device</div>
                    <div className={isActive1 ? 'reading-measurement red' : 'reading-measurement'}>78bpm</div>
                </div>
                <div className="bp-reading" onClick={() => highlightMetric(2)}>
                    <div className="reading-info">Jan 1, 12:10 PM - Wearable Device</div>
                    <div className={isActive2 ? 'reading-measurement red' : 'reading-measurement'}>59bpm</div>
                </div>
                <div className="bp-reading" onClick={() => highlightMetric(3)}>
                    <div className="reading-info">Jan 1, 9:36 PM - Wearable Device</div>
                    <div className={isActive3 ? 'reading-measurement red' : 'reading-measurement'}>80bpm</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeartRateModal;
