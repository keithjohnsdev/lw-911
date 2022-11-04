import CollapsingDiv from "../Shared/CollapsingDiv";
import { Container3 } from "../Shared/Container";
import { mockPatientViewData, mockHealthInsuranceData } from "../../graphql/mockData";
const HealthInsurance = (props) => {
  const patientPersonalData = mockPatientViewData;
  const patientHealthInsuranceData = mockHealthInsuranceData;
  return (
    <div className="insurance">
      <div className="nav-banner">
        <div className="nav-left blue-link">Back to Patient</div>
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
      <CollapsingDiv title="Policy Information">
        <Container3>
            <div className="form-row">
              <div className="info-div">
                <p>First Name</p>
                <p className="info-p">{patientHealthInsuranceData.fName}</p>
              </div>
              <div className="info-div">
                <p>Last Name</p>
                <p className="info-p">{patientHealthInsuranceData.lName}</p>
              </div>
              <div className="info-div">
                <p>Date of Birth</p>
                <p className="info-p">{patientHealthInsuranceData.dob}</p>
              </div>
            </div>
        </Container3>
      </CollapsingDiv>
    </div>
  );
};

export default HealthInsurance;
