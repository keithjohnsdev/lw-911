import Login from "./Login";
import Sidebar from "../Sidebar";
import NoPatient from "./NoPatient";
import Patient from "./Patient";
import HealthInsurance from "./HealthInsurance";
import AutoInsurance from "./AutoInsurance";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Shared/Modal";
import DNR from "./Modals/DNR";
import BloodPressureModal from "./Modals/BloodPressureModal";
import HeartRateModal from "./Modals/HeartRateModal";
import BloodGlucoseModal from "./Modals/BloodGlucoseModal";
import LorazepamModal from "./Modals/LorazepamModal";
import GabapentinModal from "./Modals/GabapentinModal";
import RecallModal from "./Modals/RecallModal";

const Home = (props) => {
  const [patientFound, setPatientFound] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [formsSidebar, setFormsSidebar] = useState(false);
  const [bloodPressureModal, setBloodPressureModal] = useState(false);
  const [heartRateModal, setHeartRateModal] = useState(false);
  const [lorazepamModal, setLorazepamModal] = useState(false);
  const [gabapentinModal, setGabapentinModal] = useState(false);
  const [bloodGlucoseModal, setBloodGlucoseModal] = useState(false);
  const [showHealthInsurance, setShowHealthInsurance] = useState(false);
  const [showAutoInsurance, setShowAutoInsurance] = useState(false);
  const [DNRModal, setDNRModal] = useState(false);
  const [recallModal, setRecallModal] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loggedIn") === null) {
      sessionStorage.setItem("loggedIn", "false");
    }
  }, []);

  function loginSuccess() {
    sessionStorage.setItem("loggedIn", "true");
    window.location.reload(false);
  }

  function handleLogOut() {
    sessionStorage.setItem("loggedIn", "false");
    window.location.reload(false);
  }

  function handleShowSidebar() {
    setShowSidebar(true);
  }

  function handleHideSidebar() {
    setShowSidebar(false);
  }

  function showVitalsModal(metric) {
    if (metric === "Blood Pressure (mmHg)") {
      setBloodPressureModal(true);
    } else if (metric === "Heart Rate (bpm)") {
      setHeartRateModal(true);
    } else if (metric === "Blood Glucose (mg/dL)") {
      setBloodGlucoseModal(true);
    }
  }

  function showMedicationsModal(med) {
    if (med === "Lorazepam") {
      setLorazepamModal(true);
    } else if (med === "Gabapentin") {
      setGabapentinModal(true);
    } else if (med === "DNR") {
      setDNRModal(true);
    } else if (med === "Recall") {
      setRecallModal(true);
    }
  }

  function showInsurance(type) {
    if (type === "Health") {
      setShowHealthInsurance(true);
    } else if (type === "Auto") {
      setShowAutoInsurance(true);
    }
  }

  function navigateHome() {
    setShowHealthInsurance(false);
    setShowAutoInsurance(false);
  }

  if (sessionStorage.getItem("loggedIn") === "false") {
    return <Login loginSuccess={loginSuccess} />;
  } else {
    return (
      <div className="home-page fullscreen">
        <Sidebar
          onSubmit={() => setPatientFound(true)}
          show={showSidebar}
          handleHideSidebar={handleHideSidebar}
          patientFound={patientFound}
          formsSidebar={formsSidebar}
          showForms={() => setFormsSidebar(true)}
          logOut={handleLogOut}
        />
        {showHealthInsurance ? (
          <HealthInsurance navigateHome={navigateHome} />
        ) : showAutoInsurance ? (
          <AutoInsurance navigateHome={navigateHome} />
        ) : patientFound ? (
          <Patient
            showVitalsModal={showVitalsModal}
            showMedicationsModal={showMedicationsModal}
            showInsurance={showInsurance}
          />
        ) : (
          <NoPatient />
        )}
        <div
          className={`toggle-sidebar-home ${showSidebar ? "hidden" : ""}`}
          onClick={handleShowSidebar}
        >
          <div className="caret-div">
            <div className="caret-icon">
              <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </div>
          </div>
        </div>
        <Modal
          show={bloodPressureModal}
          onBackdropClick={() => setBloodPressureModal(false)}
        >
          <BloodPressureModal closeModal={() => setBloodPressureModal(false)} />
        </Modal>
        <Modal
          show={heartRateModal}
          onBackdropClick={() => setHeartRateModal(false)}
        >
          <HeartRateModal closeModal={() => setHeartRateModal(false)} />
        </Modal>
        <Modal
          show={bloodGlucoseModal}
          onBackdropClick={() => setBloodGlucoseModal(false)}
        >
          <BloodGlucoseModal closeModal={() => setBloodGlucoseModal(false)} />
        </Modal>
        <Modal
          show={lorazepamModal}
          onBackdropClick={() => setLorazepamModal(false)}
        >
          <LorazepamModal closeModal={() => setLorazepamModal(false)} />
        </Modal>
        <Modal
          show={gabapentinModal}
          onBackdropClick={() => setGabapentinModal(false)}
        >
          <GabapentinModal closeModal={() => setGabapentinModal(false)} />
        </Modal>
        <Modal show={DNRModal} onBackdropClick={() => setDNRModal(false)}>
          <DNR closeModal={() => setDNRModal(false)} />
        </Modal>
        <Modal
          show={recallModal}
          onBackdropClick={() => setRecallModal(false)}
          width="width-90"
        >
          <RecallModal closeModal={() => setRecallModal(false)} />
        </Modal>
      </div>
    );
  }
};

export default Home;
