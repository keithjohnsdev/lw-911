import { GrayBorderButton } from "./Shared/Buttons";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const Sidebar = (props) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${props.show ? "" : "collapsed"}`}>
      <div className="sb-header">
        <div className="sb-header-left blue-link">Logout</div>
        <div className="sb-header-center">Edwin Rivera</div>
        <div className="sb-header-right">
          <svg
            width="25"
            height="25"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.1836 14.4727C39.3223 14.4727 39.9238 13.8496 39.9238 12.7109V7.44727C39.9238 3.02148 37.6895 0.808594 33.1777 0.808594H27.9355C26.7969 0.808594 26.1738 1.43164 26.1738 2.52734C26.1738 3.64453 26.7969 4.26758 27.9355 4.26758H33.1348C35.2402 4.26758 36.4648 5.40625 36.4648 7.64062V12.7109C36.4648 13.8496 37.0879 14.4727 38.1836 14.4727ZM2.21875 14.4727C3.33594 14.4727 3.9375 13.8496 3.9375 12.7109V7.64062C3.9375 5.40625 5.14062 4.26758 7.28906 4.26758H12.4883C13.6055 4.26758 14.2285 3.64453 14.2285 2.52734C14.2285 1.43164 13.6055 0.808594 12.4883 0.808594H7.22461C2.75586 0.808594 0.478516 3.02148 0.478516 7.44727V12.7109C0.478516 13.8496 1.10156 14.4727 2.21875 14.4727ZM10.7051 28.7383H12.1445V12.3027H10.7051V28.7383ZM13.9707 28.7383H16.6992V12.3027H13.9707V28.7383ZM17.9238 28.7383H19.6426V12.3027H17.9238V28.7383ZM21.168 28.7383H23.832V12.3027H21.168V28.7383ZM24.9277 28.7383H27.0332V12.3027H24.9277V28.7383ZM27.8066 28.7383H29.1602V12.3027H27.8066V28.7383ZM7.22461 40.2324H12.4883C13.6055 40.2324 14.2285 39.6094 14.2285 38.5137C14.2285 37.3965 13.6055 36.7734 12.4883 36.7734H7.28906C5.14062 36.7734 3.9375 35.6348 3.9375 33.4004V28.3301C3.9375 27.1914 3.31445 26.5684 2.21875 26.5684C1.08008 26.5684 0.478516 27.1914 0.478516 28.3301V33.5723C0.478516 38.0195 2.75586 40.2324 7.22461 40.2324ZM27.9355 40.2324H33.1777C37.6895 40.2324 39.9238 37.998 39.9238 33.5723V28.3301C39.9238 27.1914 39.3008 26.5684 38.1836 26.5684C37.0664 26.5684 36.4648 27.1914 36.4648 28.3301V33.4004C36.4648 35.6348 35.2402 36.7734 33.1348 36.7734H27.9355C26.7969 36.7734 26.1738 37.3965 26.1738 38.5137C26.1738 39.6094 26.7969 40.2324 27.9355 40.2324Z"
              fill="#1B93C5"
            />
          </svg>
        </div>
      </div>
      <div className="sb-body">
        <div className="forms-title">AUTO-POPULATE FORMS</div>
        <div className="hr-bar" />
        <div className="lb-buttons-wrapper pt-found">
          <GrayBorderButton>Search Form Templates</GrayBorderButton>
          <GrayBorderButton>
            Auto-Populate Form with LifeWallet User
          </GrayBorderButton>
          <GrayBorderButton>Search Previously Completed Forms</GrayBorderButton>
          <GrayBorderButton>Export Form</GrayBorderButton>
          <GrayBorderButton onClick={()=>navigate("/")}>Back to Patient</GrayBorderButton>
        </div>
      </div>
      <div className="sb-footer"></div>
    </div>
  );
};

export default Sidebar;
