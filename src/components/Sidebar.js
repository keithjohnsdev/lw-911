import {
  default as LightBlueButton,
  GreenButton,
  GrayBorderButton,
} from "./Shared/Buttons";
import GrayInput from "./Shared/Inputs";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
const Sidebar = (props) => {
  const navigate = useNavigate();
  const [dateFocused, setDateFocused] = useState(false);
  const [patientLookupData, setPatientLookupData] = useState({
    fName: "",
    lName: "",
    ssn: "",
    dob: "",
  });
  const [ssnLength, setSsnLength] = useState(0);

  function handleDateFocus() {
    setDateFocused(true);
  }

  function handleChange(e) {
    setPatientLookupData({
      ...patientLookupData,
      [e.target.name]: e.target.value,
    });
  }

  function ssnFormatter(e) {
    const value = e.target.value;
    const ssn = value.replace(/[^\d]/g, "");
    const ssnLength = ssn.length;

    if (ssnLength < 4);
    setPatientLookupData({
      ...patientLookupData,
      [e.target.name]: ssn,
    });

    if (ssnLength < 6) {
      setPatientLookupData({
        ...patientLookupData,
        [e.target.name]: `${ssn.slice(0, 3)}-${ssn.slice(3)}`,
      });
    }
    setPatientLookupData({
      ...patientLookupData,
      [e.target.name]: `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(
        5,
        9
      )}`,
    });
  }

  function handleLookup(event) {
    event.preventDefault();
    console.log(patientLookupData);
    props.onSubmit();
  }

  function keydownHandler(e) {
    if (e.key === "Enter") {
      handleLookup(patientLookupData);
    }
  }

  function clearSelection() {
    setPatientLookupData({
      fName: "",
      lName: "",
      ssn: "",
      dob: "",
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler, false);
    return () => window.removeEventListener("keydown", keydownHandler, false);
  }, []);

  if (props.patientFound) {
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
          <div className="button-wrapper">
            <div className="svg-wrapper">
              <svg
                width="30"
                height="30"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40.4651 2.09302C40.4651 0.937078 41.4022 0 42.5581 0H46.7442C54.0651 0 60 5.93483 60 13.2558V17.4419C60 18.5978 59.0629 19.5349 57.9069 19.5349C56.751 19.5349 55.8139 18.5978 55.8139 17.4419V13.2558C55.8139 8.24672 51.7533 4.18605 46.7442 4.18605H42.5581C41.4022 4.18605 40.4651 3.24897 40.4651 2.09302Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.09302 19.5349C0.937078 19.5349 -4.0961e-08 18.5978 -9.1489e-08 17.4419L-2.74467e-07 13.2558C-7.60816e-07 5.93483 5.93483 -2.16677e-06 13.2558 -2.48678e-06L17.4419 -2.66976e-06C18.5978 -2.72028e-06 19.5349 0.937076 19.5349 2.09302C19.5349 3.24897 18.5978 4.18604 17.4419 4.18604L13.2558 4.18604C8.24672 4.18604 4.18605 8.24672 4.18605 13.2558L4.18605 17.4419C4.18605 18.5978 3.24897 19.5349 2.09302 19.5349Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5349 57.9069C19.5349 59.0629 18.5978 60 17.4418 60L13.2558 60C5.9348 60 -3.29438e-05 54.0651 -3.35838e-05 46.7442L-3.39497e-05 42.5581C-3.40508e-05 41.4022 0.937044 40.4651 2.09299 40.4651C3.24893 40.4651 4.18601 41.4022 4.18601 42.5581L4.18601 46.7442C4.18601 51.7533 8.24669 55.8139 13.2558 55.8139L17.4418 55.8139C18.5978 55.8139 19.5349 56.751 19.5349 57.9069Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.907 40.4651C59.0629 40.4651 60 41.4022 60 42.5581L60 46.7442C60 54.0651 54.0652 60 46.7442 60L42.5581 60C41.4022 60 40.4651 59.0629 40.4651 57.9069C40.4651 56.751 41.4022 55.8139 42.5581 55.8139L46.7442 55.8139C51.7533 55.8139 55.814 51.7533 55.814 46.7442L55.814 42.5581C55.814 41.4022 56.751 40.4651 57.907 40.4651Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.0005 18.1395C31.1565 18.1395 32.0936 19.0766 32.0936 20.2325V30.6542C32.0936 33.2218 30.5304 35.5307 28.1465 36.4842L27.2895 36.827C26.2162 37.2563 24.9981 36.7343 24.5688 35.661C24.1395 34.5877 24.6616 33.3697 25.7348 32.9404L26.5918 32.5976C27.3864 32.2797 27.9075 31.5101 27.9075 30.6542V20.2325C27.9075 19.0766 28.8446 18.1395 30.0005 18.1395Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.361 43.0179C17.844 44.0518 18.2631 45.3091 19.297 45.826L22.2268 47.2909C24.2612 48.3081 26.5045 48.8377 28.779 48.8377L29.8266 48.8377C32.1011 48.8377 34.3444 48.3081 36.3788 47.2909L39.3086 45.826C40.3425 45.3091 40.7616 44.0518 40.2446 43.0179C39.7276 41.984 38.4704 41.5649 37.4365 42.0819L34.5067 43.5468C33.0536 44.2734 31.4512 44.6516 29.8266 44.6516L28.779 44.6516C27.1543 44.6516 25.552 44.2734 24.0988 43.5468L21.169 42.0819C20.1351 41.5649 18.8779 41.984 18.361 43.0179Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5581 18.1395C43.7141 18.1395 44.6511 19.0766 44.6511 20.2325V26.5116C44.6511 27.6675 43.7141 28.6046 42.5581 28.6046C41.4022 28.6046 40.4651 27.6675 40.4651 26.5116V20.2325C40.4651 19.0766 41.4022 18.1395 42.5581 18.1395Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4419 18.1395C18.5978 18.1395 19.5349 19.0766 19.5349 20.2325V26.5116C19.5349 27.6675 18.5978 28.6046 17.4419 28.6046C16.286 28.6046 15.3489 27.6675 15.3489 26.5116V20.2325C15.3489 19.0766 16.286 18.1395 17.4419 18.1395Z"
                  fill="#1B93C5"
                />
              </svg>
            </div>
            <LightBlueButton>Use HealthID</LightBlueButton>
          </div>
          <p style={{ padding: "10px 0" }}>OR</p>
          <form id="pt-lookup-form" onSubmit={handleLookup}>
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter First Name"
              name="fName"
              onChange={handleChange}
              value={patientLookupData.fName}
            />
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter Last Name"
              name="lName"
              onChange={handleChange}
              value={patientLookupData.lName}
            />
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter Date of Birth"
              name="dob"
              onChange={handleChange}
              value={patientLookupData.dob}
              type={dateFocused ? "date" : "text"}
              onFocus={handleDateFocus}
              min="1900-01-01"
              max="2100-12-31"
            />
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter SSN No."
              name="ssn"
              onChange={ssnFormatter}
              value={patientLookupData.ssn}
            />
            <div className="toggle-sidebar-wrapper">
              <div
                className="toggle-sidebar"
                form="pt-lookup-form"
                onClick={props.handleHideSidebar}
              >
                <div className="caret-div">
                  <div className="caret-icon">
                    <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                  </div>
                </div>
              </div>
            </div>
            <GreenButton
              className="find-patient"
              type="submit"
              form="pt-lookup-form"
              onClick={handleLookup}
            >
              Find Patient
            </GreenButton>
          </form>
          <div className="hr-bar" />
          <div className="lb-buttons-wrapper pt-found">
            <GrayBorderButton onClick={clearSelection}>
              Clear Selection
            </GrayBorderButton>
            <GrayBorderButton>Export Data to CSV</GrayBorderButton>
            <GrayBorderButton onClick={() => navigate("/forms")}>
              Auto-Populate Forms
            </GrayBorderButton>
          </div>
          <img className="dha-logo-sb pt-found" src={require("../theme/assets/dha-official-logo.png")} />
        </div>
        <div className="sb-footer"></div>
      </div>
    );
  } else {
    return (
      <div className={`sidebar ${props.show ? "" : "collapsed"}`}>
        <div className="sb-header">
          <div className="sb-header-left blue-link">Logout</div>
          <div className="sb-header-center">Lookup Patient</div>
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
          <div className="button-wrapper">
            <div className="svg-wrapper">
              <svg
                width="30"
                height="30"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40.4651 2.09302C40.4651 0.937078 41.4022 0 42.5581 0H46.7442C54.0651 0 60 5.93483 60 13.2558V17.4419C60 18.5978 59.0629 19.5349 57.9069 19.5349C56.751 19.5349 55.8139 18.5978 55.8139 17.4419V13.2558C55.8139 8.24672 51.7533 4.18605 46.7442 4.18605H42.5581C41.4022 4.18605 40.4651 3.24897 40.4651 2.09302Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.09302 19.5349C0.937078 19.5349 -4.0961e-08 18.5978 -9.1489e-08 17.4419L-2.74467e-07 13.2558C-7.60816e-07 5.93483 5.93483 -2.16677e-06 13.2558 -2.48678e-06L17.4419 -2.66976e-06C18.5978 -2.72028e-06 19.5349 0.937076 19.5349 2.09302C19.5349 3.24897 18.5978 4.18604 17.4419 4.18604L13.2558 4.18604C8.24672 4.18604 4.18605 8.24672 4.18605 13.2558L4.18605 17.4419C4.18605 18.5978 3.24897 19.5349 2.09302 19.5349Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5349 57.9069C19.5349 59.0629 18.5978 60 17.4418 60L13.2558 60C5.9348 60 -3.29438e-05 54.0651 -3.35838e-05 46.7442L-3.39497e-05 42.5581C-3.40508e-05 41.4022 0.937044 40.4651 2.09299 40.4651C3.24893 40.4651 4.18601 41.4022 4.18601 42.5581L4.18601 46.7442C4.18601 51.7533 8.24669 55.8139 13.2558 55.8139L17.4418 55.8139C18.5978 55.8139 19.5349 56.751 19.5349 57.9069Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.907 40.4651C59.0629 40.4651 60 41.4022 60 42.5581L60 46.7442C60 54.0651 54.0652 60 46.7442 60L42.5581 60C41.4022 60 40.4651 59.0629 40.4651 57.9069C40.4651 56.751 41.4022 55.8139 42.5581 55.8139L46.7442 55.8139C51.7533 55.8139 55.814 51.7533 55.814 46.7442L55.814 42.5581C55.814 41.4022 56.751 40.4651 57.907 40.4651Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.0005 18.1395C31.1565 18.1395 32.0936 19.0766 32.0936 20.2325V30.6542C32.0936 33.2218 30.5304 35.5307 28.1465 36.4842L27.2895 36.827C26.2162 37.2563 24.9981 36.7343 24.5688 35.661C24.1395 34.5877 24.6616 33.3697 25.7348 32.9404L26.5918 32.5976C27.3864 32.2797 27.9075 31.5101 27.9075 30.6542V20.2325C27.9075 19.0766 28.8446 18.1395 30.0005 18.1395Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.361 43.0179C17.844 44.0518 18.2631 45.3091 19.297 45.826L22.2268 47.2909C24.2612 48.3081 26.5045 48.8377 28.779 48.8377L29.8266 48.8377C32.1011 48.8377 34.3444 48.3081 36.3788 47.2909L39.3086 45.826C40.3425 45.3091 40.7616 44.0518 40.2446 43.0179C39.7276 41.984 38.4704 41.5649 37.4365 42.0819L34.5067 43.5468C33.0536 44.2734 31.4512 44.6516 29.8266 44.6516L28.779 44.6516C27.1543 44.6516 25.552 44.2734 24.0988 43.5468L21.169 42.0819C20.1351 41.5649 18.8779 41.984 18.361 43.0179Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5581 18.1395C43.7141 18.1395 44.6511 19.0766 44.6511 20.2325V26.5116C44.6511 27.6675 43.7141 28.6046 42.5581 28.6046C41.4022 28.6046 40.4651 27.6675 40.4651 26.5116V20.2325C40.4651 19.0766 41.4022 18.1395 42.5581 18.1395Z"
                  fill="#1B93C5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4419 18.1395C18.5978 18.1395 19.5349 19.0766 19.5349 20.2325V26.5116C19.5349 27.6675 18.5978 28.6046 17.4419 28.6046C16.286 28.6046 15.3489 27.6675 15.3489 26.5116V20.2325C15.3489 19.0766 16.286 18.1395 17.4419 18.1395Z"
                  fill="#1B93C5"
                />
              </svg>
            </div>
            <LightBlueButton>Use HealthID</LightBlueButton>
          </div>
          <p style={{ padding: "10px 0" }}>OR</p>
          <form id="pt-lookup-form" onSubmit={handleLookup}>
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter First Name"
              name="fName"
              onChange={handleChange}
              value={patientLookupData.fName}
            />
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter Last Name"
              name="lName"
              onChange={handleChange}
              value={patientLookupData.lName}
            />
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter Date of Birth"
              name="dob"
              onChange={handleChange}
              value={patientLookupData.dob}
              type={dateFocused ? "date" : "text"}
              onFocus={handleDateFocus}
              min="1900-01-01"
              max="2100-12-31"
            />
            <GrayInput
              className="sb-button"
              form="pt-lookup-form"
              placeholder="Enter SSN No."
              name="ssn"
              onChange={ssnFormatter}
              value={patientLookupData.ssn}
            />
            <div className="toggle-sidebar-wrapper">
              <div
                className="toggle-sidebar"
                form="pt-lookup-form"
                onClick={props.handleHideSidebar}
              >
                <div className="caret-div">
                  <div className="caret-icon">
                    <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                  </div>
                </div>
              </div>
            </div>
            <GreenButton
              className="find-patient"
              type="submit"
              form="pt-lookup-form"
              onClick={handleLookup}
            >
              Find Patient
            </GreenButton>
          </form>
          <div className="hr-bar" />
          <div className="lb-buttons-wrapper">
            <LightBlueButton>Send HIPAA Release</LightBlueButton>
            <div style={{padding: "6px 0"}} />
            <LightBlueButton>Record Authorization</LightBlueButton>
          </div>
          <img className="dha-logo-sb" src={require("../theme/assets/dha-official-logo.png")} />
        </div>
      </div>
    );
  }
};

export default Sidebar;
