import CollapsingDiv from "../Shared/CollapsingDiv";
import { Container3 } from "../Shared/Container";
import { LightBlueButtonBorder as LightBlueButton } from "../Shared/Buttons";
import { useState } from "react";
import {
  mockPatientViewData,
  mockVitalsData,
  mockMedicationsData,
  mockInsuranceData,
  mockMedicalIssuesData,
  mockVaccinationsData,
  mockAllergiesData
} from "../../graphql/mockData";

const Patient = (props) => {
  const patientPersonalData = mockPatientViewData;
  const vitalsData = mockVitalsData;
  const medicationsData = mockMedicationsData;
  const insuranceData = mockInsuranceData;
  const medicalIssuesData = mockMedicalIssuesData;
  const vaccinationsData = mockVaccinationsData;
  const allergiesData = mockAllergiesData;

  return (
    <div className="patient">
      <div className="patient-found-banner">Patient Found Successfully!</div>
      <CollapsingDiv title="Personal Info" height="245">
        <Container3>
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
                  I have a dog, but don’t worry his name is Mr. Barky Von
                  Schnauzer and he barks but he doesn’t bite.
                </p>
              </div>
            </div>
          </div>
        </Container3>
      </CollapsingDiv>
      <CollapsingDiv title={`Vitals (${vitalsData.length})`} height={`${vitalsData.length === 0 ? 70 : vitalsData.length * 70}`}>
        <div className="patient-data-rows">
          {vitalsData.map((metric, index) => {
            return (
              <div className="patient-data-row" key={index}>
                <Container3>
                  <div className="row-content">
                    <div className="metric-title">
                      <p className="title">{metric.title}</p>
                      <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
                    </div>
                    <div className="metric-value vitals">
                      <p>{metric.value}</p>
                      <LightBlueButton onClick={() => props.showModal(index)}>View Chart</LightBlueButton>
                    </div>
                  </div>
                </Container3>
              </div>
            );
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv
        title={`Medications (${medicationsData.length})`}
        height={`${medicationsData.length === 0 ? 70 : medicationsData.length * 70}`}
      >
        <div className="patient-data-rows">
          {medicationsData.map((metric, index) => {
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
                      <p>{metric.dosage}</p>
                      <LightBlueButton>FDA Information</LightBlueButton>
                    </div>
                  </div>
                </Container3>
              </div>
            );
          })}
        </div>
      </CollapsingDiv>
      <CollapsingDiv title={`Allergies (0)`} height={`${allergiesData.length === 0 ? 70 : allergiesData.length * 70}`}>
        <div className="patient-data-rows">
          <div className="patient-data-row">
            <Container3>
              <p className="no-content">No Allergies Listed.</p>
            </Container3>
          </div>
        </div>
      </CollapsingDiv>
      <CollapsingDiv title={`Insurances (${insuranceData.length})`} height="70">
        <div className="patient-data-rows">
          {insuranceData.map((metric, index) => {
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
                        {`Effective Until: ${metric.effectiveUntil}`}
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
        title={`Medical Issues (${insuranceData.length})`}
        height="70"
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
        height="70"
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
    </div>
  );
};

export default Patient;
