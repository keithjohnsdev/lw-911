import CollapsingDiv from "../Shared/CollapsingDiv";
import { Container3, Container2 } from "../Shared/Container";
import {
  mockPatientViewData,
  mockHealthInsuranceData,
  mockAutoInsuranceData,
} from "../../graphql/mockData";
const AutoInsurance = (props) => {
  const patientPersonalData = mockPatientViewData;
  const patientAutoInsuranceData = mockAutoInsuranceData;
  return (
    <div className="insurance">
      <div className="nav-banner">
        <div className="nav-left blue-link" onClick={props.navigateHome}>
          Back to Patient
        </div>
        <div className="nav-center">Auto Insurance Details</div>
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
              <p className="info-p">{patientAutoInsuranceData.type}</p>
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
              <p className="info-p">{patientAutoInsuranceData.agency}</p>
            </div>
            <div className="info-div">
              <p>Agency Phone</p>
              <p className="info-p">{patientAutoInsuranceData.agencyPhone}</p>
            </div>
          </div>
        </Container2>
      </CollapsingDiv>
      <CollapsingDiv title="Policy Assets" height="245">
        <Container2>
          <div className="form-row">
            <div className="info-div">
              <p>Covered Asset</p>
              <p className="info-p">{patientAutoInsuranceData.coveredAsset}</p>
            </div>
            <div className="info-div">
              <p>Category</p>
              <p className="info-p">{patientAutoInsuranceData.category}</p>
            </div>
            <div className="info-div">
              <p>Coverage</p>
              <p className="info-p">{patientAutoInsuranceData.coverage1}</p>
            </div>
            <div className="info-div">
              <p>Limit</p>
              <p className="info-p">{patientAutoInsuranceData.limit1}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Coverage</p>
              <p className="info-p">{patientAutoInsuranceData.coverage2}</p>
            </div>
            <div className="info-div">
              <p>Limit</p>
              <p className="info-p">{patientAutoInsuranceData.limit2}</p>
            </div>
            <div className="info-div">
              <p>Coverage</p>
              <p className="info-p">{patientAutoInsuranceData.coverage3}</p>
            </div>
            <div className="info-div">
              <p>Limit</p>
              <p className="info-p">{patientAutoInsuranceData.limit3}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Description</p>
              <p className="info-p">
                {patientAutoInsuranceData.deductibleDesc1}
              </p>
            </div>
            <div className="info-div">
              <p>Deductible</p>
              <p className="info-p">{patientAutoInsuranceData.deductible1}</p>
            </div>
            <div className="info-div">
              <p>Description</p>
              <p className="info-p">
                {patientAutoInsuranceData.deductibleDesc2}
              </p>
            </div>
            <div className="info-div">
              <p>Deductible</p>
              <p className="info-p">{patientAutoInsuranceData.deductible2}</p>
            </div>
          </div>
        </Container2>
      </CollapsingDiv>
      <CollapsingDiv title="Claims History" height="fit">
        <Container2>
          <div className="claims-history">
            <h2>Claim Timeline</h2>
            <div className="claim-timeline-title">
              <h3>Claim #: 2022-132</h3>
            </div>
            <img src={require("../../theme/assets/claim-timeline.png")} alt="claims timeline" />
            <img src={require("../../theme/assets/auto-claim-details.png")} alt="claims timeline" />

          </div>
        </Container2>
      </CollapsingDiv>
    </div>
  );
};

export default AutoInsurance;
