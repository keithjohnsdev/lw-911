import { Container3 } from "./Container";
import { useState } from "react";
import LightBlueButton from "./Buttons";

const MedicationsRow = (props) => {
  const metric = props.metric;
  const index = props.index;
  const [highlightMetric, setHighlightMetric] = useState(false);

  return (
    <div className="patient-data-row" key={index}>
    <Container3>
      <div className="row-content">
        <div className={highlightMetric ? "metric-title red" : "metric-title"} onClick={() => setHighlightMetric(current => !current)}>
          <p className="title">{metric.title}</p>
          {metric.lastReading && (
            <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
          )}
        </div>
        <div className={highlightMetric ? "metric-value red" : "metric-value"}>
          <p  onClick={() => setHighlightMetric(current => !current)}>{metric.dosage}</p>
          <LightBlueButton
            onClick={() => props.showMedicationsModal(metric.title)}
          >
            FDA Information
          </LightBlueButton>
        </div>
      </div>
    </Container3>
  </div>
  );
};

export default MedicationsRow;
