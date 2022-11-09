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
      <CollapsingDiv title="Claims History" height="fit" collapsed="true">
        <Container2>
          <div className="claims-history">
            <h2>Claim Timeline</h2>
            <div className="claim-timeline-title">
              <h3>Claim #: 2022-132</h3>
            </div>
            <img
              src={require("../../theme/assets/claim-timeline.png")}
              alt="claims timeline"
            />
            <br />
            <div className="form-row">
              <div className="info-div">
                <p>Date of Loss:</p>
                <p className="info-p">01/01/2022</p>
              </div>
              <div className="info-div">
                <p>Time of Loss:</p>
                <p className="info-p">2:31pm EST</p>
              </div>
              <div className="info-div">
                <p>Description</p>
                <p className="info-p">First Notice of Loss</p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Notification Type:</p>
                <p className="info-p">Incoming Call</p>
              </div>
              <div className="info-div">
                <p>Member Name:</p>
                <p className="info-p">
                  Edwin Rivera <br /> Nancy Rivera
                </p>
              </div>
              <div className="info-div">
                <p>Notification Date:</p>
                <p className="info-p">01/02/2022</p>
              </div>
            </div>
            <br />
            <div style={{ width: "100%", borderBottom: "solid 1px #cfd4d7" }} />
            <div className="form-row">
              <div className="info-div">
                <p>Date of Event:</p>
                <p className="info-p">03/01/2022</p>
              </div>
              <div className="info-div">
                <p>Description</p>
                <p className="info-p">Independent Medical Exam (IME)</p>
              </div>
              <div className="info-div"></div>
            </div>
            <br />
            <div style={{ width: "100%", borderBottom: "solid 1px #cfd4d7" }} />
            <br />
            <h4>Loss Details / Key Facts</h4>
            <div className="form-row">
              <div className="info-div">
                <p>Date of Loss:</p>
                <p className="info-p">12/07/2013</p>
              </div>
              <div className="info-div">
                <p>Time of Loss:</p>
                <p className="info-p">6:00pm EST</p>
              </div>
              <div className="info-div">
                <p>Date Reported</p>
                <p className="info-p">12/8/2013 11:24:49 AM Central</p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Reported to:</p>
                <p className="info-p">Fabiola Montoya</p>
              </div>
              <div className="info-div">
                <p>Cross File Claim:</p>
                <p className="info-p"></p>
              </div>
              <div className="info-div">
                <p>Companion Claims:</p>
                <p className="info-p"></p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Loss Description:</p>
                <p className="info-p"></p>
              </div>
              <div className="info-div">
                <p>Loss Type:</p>
                <p className="info-p">Contact with other vehicle/property</p>
              </div>
              <div className="info-div">
                <p>Detailed Loss Type:</p>
                <p className="info-p">
                  Rear-end accident- Other party rear-ended insured
                </p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Number of Involved Vehicles Damaged:</p>
                <p className="info-p">2</p>
              </div>
              <div className="info-div">
                <p>Number of Other Property Assets Damaged:</p>
                <p className="info-p">0</p>
              </div>
              <div className="info-div">
                <p>Hit and Run:</p>
                <p className="info-p">No</p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Phantom Vehicle:</p>
                <p className="info-p">No</p>
              </div>
            </div>
          </div>
        </Container2>
      </CollapsingDiv>
      <CollapsingDiv title="LifeWallet Data Integrations" height="fit">
        <Container2>
          <div className="data-integrations">
            <div className="traffic-reports">
              <div className="traffic-report">
                <h4>Traffic Reports Generated for Member</h4>
                <p>January 1, 2022</p>
                <p>Chicago, IL</p>
                <p>Ofc. Johnson</p>
                <p>Injury Level 1</p>
                <p>Passenger in Vehicle</p>
                <p>Member Medicare eligible on this date</p>
              </div>
              <div className="traffic-report">
                <h4>Traffic Reports Generated for Member</h4>
                <p>July 7, 2022</p>
                <p>Topeka, KA</p>
                <p>Ofc. Smith</p>
                <p>Injury Level 3</p>
                <p>Driver of Vehicle</p>
                <p>Member Medicare eligible on this date</p>
              </div>
            </div>
            <div className="traffic-reports">
              <div className="traffic-report">
                <h4>Live Medical Records</h4>
                <p>
                  Member - DID execute his/her HIPAA release for information
                  (click to view)
                </p>
                <p>Humana - Member's health plan today</p>
                <p>Previous existing medical conditions on this date (click)</p>
              </div>
            </div>
            <div className="accident-report">
              <h3>Auto Accident Damage Report</h3>
              <img
                src={require("../../theme/assets/accident-report.png")}
                alt="claim details"
              />
            </div>
          </div>
        </Container2>
      </CollapsingDiv>
    </div>
  );
};

export default AutoInsurance;
