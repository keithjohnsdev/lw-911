const GrayInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  onFocus,
  max,
  min,
}) => (
  <div className="gray-input">
    {label && <label htmlFor="input">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="input"
      id="input"
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      max={max}
      min={min}
    />
  </div>
);

export default GrayInput;
