import CollapsingDiv from "../Shared/CollapsingDiv";
import { Container3, Container2 } from "../Shared/Container";
import { mockPatientViewData, mockHealthInsuranceData, mockAutoInsuranceData } from "../../graphql/mockData";
const HealthInsurance = (props) => {
  const patientPersonalData = mockPatientViewData;
  const patientHealthInsuranceData = mockHealthInsuranceData;
const patientAutoInsuranceData = mockAutoInsuranceData;
  return (
    <div className="insurance">
      <div className="nav-banner">
        <div className="nav-left blue-link" onClick={props.navigateHome}>Back to Patient</div>
        <div className="nav-center">Health Insurance Details</div>
        <div className="nav-right blue-link">Export to Excel</div>
      </div>
      <CollapsingDiv title="Personal Info" height="150">
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
          </div>
        </Container3>
      </CollapsingDiv>
      <CollapsingDiv title="Policy Details" height="210">
        <Container2>
          <div className="form-row">
            <div className="info-div">
              <p>Policy Holder</p>
              <p className="info-p">{patientAutoInsuranceData.holder}</p>
            </div>
            <div className="info-div">
              <p>Policy Type</p>
              <p className="info-p">Health - HMO</p>
            </div>
            <div className="info-div">
              <p>Policy Number</p>
              <p className="info-p">{patientAutoInsuranceData.number}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Policy Status</p>
              <p className="info-p">{patientAutoInsuranceData.status}</p>
            </div>
            <div className="info-div">
              <p>Form Number</p>
              <p className="info-p">{patientAutoInsuranceData.formNumber}</p>
            </div>
            <div className="info-div">
              <p>Effective Date</p>
              <p className="info-p">{patientAutoInsuranceData.effectiveDate}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Expiration Date</p>
              <p className="info-p">
                {patientAutoInsuranceData.expirationDate}
              </p>
            </div>
            <div className="info-div">
              <p>Agency Name</p>
              <p className="info-p">ABC Southeast, Inc.</p>
            </div>
            <div className="info-div">
              <p>Agency Phone</p>
              <p className="info-p">{patientAutoInsuranceData.agencyPhone}</p>
            </div>
          </div>
        </Container2>
      </CollapsingDiv>
    </div>
  );
};

export default HealthInsurance;
