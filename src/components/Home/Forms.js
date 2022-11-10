import FormsSidebar from "../FormsSidebar";
import { useState } from "react";
import NoForm from "./NoForm";

const Forms = (props) => {

  return (
    <div className="forms-page fullscreen">
      <FormsSidebar show={true} />
      <NoForm />
    </div>
  );
};

export default Forms;
