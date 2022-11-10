import Container2 from "../Shared/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

const NoForm = (props) => {
  return (
      <Container2>
        <div className="no-patient">
        <FontAwesomeIcon icon={faFileInvoice} size="8x" color="#cfd4d7"/>
          <div>
            <p>
              Select a form to complete on the left.
            </p>
          </div>
        </div>
      </Container2>
  );
};

export default NoForm;