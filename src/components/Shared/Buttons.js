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

export const GreenButton = (props) => {
  return (
    <button className="green-button" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export const GrayBorderButton = (props) => {
  return (
    <button className="gray-border-button" onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default LightBlueButton;
