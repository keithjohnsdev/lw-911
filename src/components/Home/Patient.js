import CollapsingDiv from "../Shared/CollapsingDiv";
import { Container3 } from "../Shared/Container";
import VitalsRow from "../Shared/VitalsRow";
import MedicationsRow from "../Shared/MedicationsRow";
import { LightBlueButtonBorder as LightBlueButton } from "../Shared/Buttons";
import {
  mockPatientViewData,
  mockVitalsData,
  mockMedicationsData,
  mockInsuranceData,
  mockMedicalIssuesData,
  mockVaccinationsData,
  mockAllergiesData,
} from "../../graphql/mockData";

const Patient = (props) => {
  const patientPersonalData = mockPatientViewData;
  const vitalsData = mockVitalsData;
  const medicationsData = mockMedicationsData;
  const insuranceData = mockInsuranceData;
  const medicalIssuesData = mockMedicalIssuesData;
  const vaccinationsData = mockVaccinationsData;
  const allergiesData = mockAllergiesData;

  function viewInsuranceDetails(type) {
    props.showInsurance(type);
  }

  return (
    <div className="patient">
      <div className="patient-found-banner">Patient Found Successfully!</div>
      <CollapsingDiv title="Personal Info" height="245">
        <Container3>
        <div className="nda">PURSUANT TO NDA</div>
          <div className="patient-info">
            <div className="patient-info-top">
              <div className="patient-img">
                <img
                  src={require("../../theme/assets/edwin.png")}
                  alt="patient profile"
                />
              </div>
              <div className="patient-details">
                <div className="patient-details-top">
                  <h1>{patientPersonalData.name}</h1>
                </div>
                <div className="patient-details-bottom">
                  <div className="info-div left">
                    <p>{`${patientPersonalData.gender} | ${patientPersonalData.age} yrs old`}</p>
                    <p>{`D.O.B: ${patientPersonalData.dobStr}`}</p>
                  </div>
                  <div className="info-div">
                    <p>{`${patientPersonalData.phone}`}</p>
                    <p
                      className="email"
                      onClick={() =>
                        (window.location.href = `mailto:${patientPersonalData.email}`)
                      }
                    >{`${patientPersonalData.email}`}</p>
                  </div>
                  <div className="info-div right">
                    <p>{`${patientPersonalData.address1}`}</p>
                    <p>{`${patientPersonalData.address2}`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="patient-info-bottom">
              <div className="emt-info">
                <p style={{ color: "#1B93C5", marginBottom: "10px" }}>
                  Paramedic EMT Information
                </p>
                <p style={{ fontWeight: "600" }}>
                  It is easier to get in to my house through the side gate. That
                  door is closer to my bedroom. Also, I have a small dog that
                  barks a lot, but don't worry he will not bite.
                </p>
              </div>
            </div>
          </div>
        </Container3>
      </CollapsingDiv>
      <CollapsingDiv
        title={`Vitals (${vitalsData.length})`}
        height={`${vitalsData.length === 0 ? 70 : vitalsData.length * 70}`}
      >
        <div className="patient-data-rows">
          {vitalsData.map((metric, index) => {
            return (
              <VitalsRow
                key={index}
                metric={metric}
                index={index}
                showVitalsModal={props.showVitalsModal}
              />
            );
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv
        title={`Medications (${medicationsData.length})`}
        height={`${
          medicationsData.length === 0 ? 70 : medicationsData.length * 70
        }`}
      >
        <div className="patient-data-rows">
          {medicationsData.map((metric, index) => {
            return <MedicationsRow 
            key={index}
            metric={metric}
            index={index}
            showMedicationsModal={props.showMedicationsModal}/>;
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv
        title={`Allergies (${allergiesData.length})`}
        height={`${
          allergiesData.length === 0 ? 70 : allergiesData.length * 70
        }`}
      >
        <div className="patient-data-rows">
          {allergiesData.map((metric, index) => {
            return (
              <div className="patient-data-row" key={index}>
                <Container3>
                  <div className="row-content">
                    <div className="metric-title">
                      <p className="title">{metric.title}</p>
                      {metric.lastReading && (
                        <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
                      )}
                    </div>
                    <div className="metric-value">
                      <p>
                        ICD-10 Code:{" "}
                        <span style={{ fontWeight: "600" }}>{metric.ICD}</span>
                      </p>
                    </div>
                  </div>
                </Container3>
              </div>
            );
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv
        title={`Insurances (${insuranceData.length})`}
        height={`${
          insuranceData.length === 0 ? 70 : insuranceData.length * 70
        }`}
      >
        <div className="patient-data-rows">
          {insuranceData.map((metric, index) => {
            return (
              <div className="patient-data-row" key={index}>
                <Container3>
                  <div className="row-content">
                    <div className="metric-title">
                      <p className="title">{`${metric.title} (${metric.type})`}</p>
                      {metric.lastReading && (
                        <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
                      )}
                    </div>
                    <div className="metric-value">
                      <p>
                        <span style={{ color: "#3BC86B", fontWeight: "600" }}>
                          {metric.status}
                        </span>
                        <span style={{ margin: "0 7px" }}>|</span>
                        {`Effective Until: ${metric.effectiveUntil}`}
                      </p>
                      <LightBlueButton
                        onClick={() => viewInsuranceDetails(metric.type)}
                      >
                        View Details
                      </LightBlueButton>
                    </div>
                  </div>
                </Container3>
              </div>
            );
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv
        title={`Medical Issues (${medicalIssuesData.length})`}
        height={`${
          medicalIssuesData.length === 0 ? 70 : medicalIssuesData.length * 70
        }`}
      >
        <div className="patient-data-rows">
          {medicalIssuesData.map((metric, index) => {
            return (
              <div className="patient-data-row" key={index}>
                <Container3>
                  <div className="row-content">
                    <div className="metric-title">
                      <p className="title">{metric.title}</p>
                      {metric.lastReading && (
                        <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
                      )}
                    </div>
                    <div className="metric-value">
                      <p>
                        <span style={{ color: "#3BC86B", fontWeight: "600" }}>
                          {metric.status}
                        </span>
                        <span style={{ margin: "0 7px" }}>|</span>
                        {`${metric.doctor}`}
                        <span style={{ margin: "0 7px" }}>|</span>
                        {metric.date}
                      </p>
                    </div>
                  </div>
                </Container3>
              </div>
            );
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv
        title={`Vaccinations (${vaccinationsData.length})`}
        height={`${
          vaccinationsData.length === 0 ? 70 : vaccinationsData.length * 70
        }`}
      >
        <div className="patient-data-rows">
          {vaccinationsData.map((metric, index) => {
            return (
              <div className="patient-data-row" key={index}>
                <Container3>
                  <div className="row-content">
                    <div className="metric-title">
                      <p className="title">{metric.title}</p>
                      {metric.lastReading && (
                        <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
                      )}
                    </div>
                    <div className="metric-value">
                      <p>
                        {metric.provider}
                        <span style={{ margin: "0 7px" }}>|</span>
                        {`Administered Date: ${metric.date}`}
                      </p>
                    </div>
                  </div>
                </Container3>
              </div>
            );
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv title="Do Not Resuscitate (DNR)" height="70">
        <div className="patient-data-rows">
          <div className="patient-data-row">
            <Container3>
              <div className="row-content">
                <div className="metric-title">
                  <p className="title red">Do Not Resuscitate</p>
                </div>
                <div className="metric-value">
                  <LightBlueButton
                    onClick={() => props.showMedicationsModal("DNR")}
                  >
                    View Form
                  </LightBlueButton>
                </div>
              </div>
            </Container3>
          </div>
        </div>
      </CollapsingDiv>
      <CollapsingDiv title="Recalled Product Purchases (1)" height="70">
        <div className="patient-data-rows">
          <div className="patient-data-row">
            <Container3>
              <div className="row-content">
                <div className="metric-title">
                  <p className="title">Abbott Similac Advance</p>
                </div>
                <div className="metric-value">
                  <LightBlueButton
                    onClick={() => props.showMedicationsModal("Recall")}
                  >
                    View Info
                  </LightBlueButton>
                </div>
              </div>
            </Container3>
          </div>
        </div>
      </CollapsingDiv>
    </div>
  );
};

export default Patient;
