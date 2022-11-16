import FormsSidebar from "../FormsSidebar";
import { useState } from "react";
import NoForm from "./NoForm";
import Modal from "../Shared/Modal";
import FormListModal from "./FormListModal";
import Form from "./Form";

const Forms = (props) => {
  const [formListModal, setFormListModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formFilled, setFormFilled] = useState(false);

  function openFormList() {
    setFormListModal(true);
  }

  function handleShowForm(selectedForm) {
    setFormListModal(false);
    if (selectedForm === "EMS Worksheet") {
      setForm("1");
      setFormTitle("EMS Patient Care Worksheet (F-47489)");
      setFormFilled(false);
      setShowForm(true);
    } else if (selectedForm === "Patient Care Report") {
      setForm("2");
      setFormTitle("Patient Care Report (13-984110-01)");
      setFormFilled(false);
      setShowForm(true);
    }
  }

  function fillForm() {
    console.log("fillForm");
    setFormFilled(true);
  }
  return (
    <div className="forms-page fullscreen">
      <div className="nda">PURSUANT TO NDA</div>
      <FormsSidebar
        show={true}
        openFormList={openFormList}
        fillForm={fillForm}
      />
      {showForm ? (
        <Form form={form} formTitle={formTitle} formFill={formFilled} />
      ) : (
        <NoForm />
      )}
      <Modal
        show={formListModal}
        onBackdropClick={() => setFormListModal(false)}
      >
        <FormListModal
          closeModal={() => setFormListModal(false)}
          handleShowForm={handleShowForm}
        />
      </Modal>
    </div>
  );
};

export default Forms;
