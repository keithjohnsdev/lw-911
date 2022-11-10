const Form = (props) => {
  return (
    <div className="form-page">
      <div className="patient-found-banner">{props.formTitle}</div>
      <div className="form">
        {props.form === "1" &&
          (props.formFill ? (
            <img
              src={require("../../theme/assets/ems-worksheet-form-filled.png")}
            />
          ) : (
            <img src={require("../../theme/assets/ems-worksheet-form.png")} />
          ))}
        {props.form === "2" &&
          (props.formFill ? (
            <img
              src={require("../../theme/assets/patient-care-report-filled.png")}
            />
          ) : (
            <img src={require("../../theme/assets/patient-care-report.png")} />
          ))}
      </div>
    </div>
  );
};

export default Form;
