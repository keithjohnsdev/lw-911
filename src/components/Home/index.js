import Sidebar from "../Sidebar";
import NoPatient from "./NoPatient";
import Patient from "./Patient";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Shared/Modal";
import BloodPressureModal from "./Modals/BloodPressureModal";
import HeartRateModal from "./Modals/HeartRateModal";
import BloodGlucoseModal from "./Modals/BloodGlucoseModal";
import LorazepamModal from "./Modals/LorazepamModal";
import GabapentinModal from "./Modals/GabapentinModal";

const Home = (props) => {
  const [patientFound, setPatientFound] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [bloodPressureModal, setBloodPressureModal] = useState(false);
  const [heartRateModal, setHeartRateModal] = useState(false);
  const [lorazepamModal, setLorazepamModal] = useState(false);
  const [gabapentinModal, setGabapentinModal] = useState(false);
  const [bloodGlucoseModal, setBloodGlucoseModal] = useState(false);

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
      setLorazepamModal(true)
    } else if (med === "Gabapentin") {
      setGabapentinModal(true);
    }
  }

  return (
    <div className="home-page fullscreen">
      <Sidebar
        onSubmit={() => setPatientFound(true)}
        show={showSidebar}
        handleHideSidebar={handleHideSidebar}
        patientFound={patientFound}
      />
      {patientFound ? (
        <Patient
          showVitalsModal={showVitalsModal}
          showMedicationsModal={showMedicationsModal}
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
    </div>
  );
};

export default Home;
