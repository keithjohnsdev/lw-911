const Form = (props) => {
  return (
    <div className="form-page">
      <div className="patient-found-banner">{props.formTitle}</div>
      <div className="form">
        {props.formFill ? <img src={require("../../theme/assets/ems-worksheet-form-filled.png")} /> : <img src={require("../../theme/assets/ems-worksheet-form.png")} />}
      </div>
    </div>
  );
};

export default Form;
