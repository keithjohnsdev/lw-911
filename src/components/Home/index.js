import Sidebar from "../Sidebar";
import NoPatient from "./NoPatient";
import Patient from "./Patient";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  const [patientFound, setPatientFound] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

    function handleShowSidebar () {
        setShowSidebar(true);
    }

    function handleHideSidebar () {
        setShowSidebar(false);
    }

  return (
    <div className="home-page fullscreen">
      <Sidebar onSubmit={() => setPatientFound(true)} show={showSidebar} handleHideSidebar={handleHideSidebar} patientFound={patientFound}/>
      {patientFound ? <Patient /> : <NoPatient />}
      <div className={`toggle-sidebar-home ${showSidebar ? "hidden" : ""}`} onClick={handleShowSidebar}>
        <div className="caret-div">
          <div className="caret-icon">
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
