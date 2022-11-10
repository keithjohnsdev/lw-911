import FormsSidebar from "../FormsSidebar";
import { useState } from "react";

const Forms = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);
  function handleShowSidebar() {
    setShowSidebar(true);
  }

  function handleHideSidebar() {
    setShowSidebar(false);
  }
  return (
    <div className="forms-page fullscreen">
      <FormsSidebar show={showSidebar} handleHideSidebar={handleHideSidebar} />
    </div>
  );
};

export default Forms;
