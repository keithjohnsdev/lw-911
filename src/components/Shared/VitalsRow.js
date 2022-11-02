import { Container3 } from "./Container";
import LightBlueButton from "./Buttons";
import { useState } from "react";

const VitalsRow = (props) => {
  const metric = props.metric;
  const index = props.index;
  const [highlightMetric, setHighlightMetric] = useState(false);

  return (
    <div className="patient-data-row">
      <Container3>
        <div className="row-content">
          <div className="metric-title">
            <p className="title">{metric.title}</p>
            <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
          </div>
          <div className="metric-value vitals">
            <p className={highlightMetric ? "red" : ""} onClick={() => setHighlightMetric(current => !current)}>{metric.value}</p>
            <LightBlueButton
              onClick={() => props.showVitalsModal(metric.title)}
            >
              View Chart
            </LightBlueButton>
          </div>
        </div>
      </Container3>
    </div>
  );
};

export default VitalsRow;
