import Container2 from "../Shared/Container";

const NoPatient = (props) => {
  return (
      <Container2>
        <div className="nda">PURSUANT TO LifeWallet/Verizon NDA</div>
        <div className="no-patient">
          <svg
            width="160"
            height="160"
            viewBox="0 0 216 216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M108 216C167.115 216 216 167.115 216 108C216 48.8853 167.007 0 107.892 0C48.7777 0 0 48.8853 0 108C0 167.115 48.7777 216 108 216ZM108 144.072C74.0818 144.072 48.347 157.639 38.333 171.314C23.1505 154.624 13.998 132.443 13.998 108C13.998 55.8843 55.7767 13.998 107.892 13.998C160.008 13.998 202.002 55.8843 202.002 108C202.11 132.443 192.849 154.732 177.559 171.422C167.653 157.639 141.918 144.072 108 144.072ZM108 125.659C128.674 125.767 144.718 108.108 144.718 85.0648C144.718 63.4217 128.459 45.332 108 45.332C87.4337 45.332 71.1745 63.4217 71.2822 85.0648C71.2822 108.108 87.326 125.551 108 125.659Z"
              fill="#CFD4D7"
            />
          </svg>
          <div>
            <p>
              Enter patient information on the left or use HealthID to bring up
              a patient's health information.{" "}
            </p>
          </div>
        </div>
      </Container2>
  );
};

export default NoPatient;
