const RecallModal = (props) => {
  return (
    <div className="modal-relative">
      <div className="x-icon-div" onClick={props.closeModal}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.59961 25.9512C0.697266 26.8535 0.654297 28.4648 1.62109 29.3887C2.54492 30.3555 4.15625 30.3125 5.08008 29.4102L15.5 18.9902L25.8984 29.4102C26.8438 30.334 28.4336 30.3555 29.3574 29.3887C30.3242 28.4648 30.3027 26.8535 29.3789 25.9297L18.959 15.5098L29.3789 5.11133C30.3027 4.16602 30.3242 2.57617 29.3574 1.65234C28.4336 0.685547 26.8438 0.707031 25.8984 1.63086L15.5 12.0508L5.08008 1.63086C4.15625 0.728516 2.54492 0.685547 1.62109 1.65234C0.654297 2.57617 0.697266 4.1875 1.59961 5.08984L12.0195 15.5098L1.59961 25.9512Z"
            fill="#1B93C5"
          />
        </svg>
      </div>
      <div className="modal-flex wide">
        <div className="header">Recall - Abbot Similac Advance</div>
        <div className="body fda-img">
          <div className="fda-img-wrapper">
            <iframe
              src={require("../../../theme/assets/abbott-recall.pdf")}
              width="100%"
              height="650px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecallModal;
