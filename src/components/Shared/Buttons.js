const LightBlueButton = (props) => {
  return (
    <button className="lb-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const LightBlueButtonBorder = (props) => {
  return (
    <button className="lb-button border" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const GraydientButton = (props) => {
  return (
    <button className="graydient-button" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default LightBlueButton;
