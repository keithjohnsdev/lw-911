export const mockPatientViewData = {
  name: "Edwin Rivera",
  gender: "Male",
  age: 67,
  dobStr: "Oct 31, 1955",
  dobNum: "10/31/1955",
  SSN: "*** ** 1234",
  VAID: 5849284830,
  address1: "12345 SW 67 Street",
  address2: "Miami, FL 33123",
  phone: "(305) 123 - 4567",
  email: "e.rivera@email.com",
  fName: "Edwin",
  lName: "Rivera",
  division: "Marine Corps",
  serviceTime: "Jan 1, 1973 - Jan 5, 1980",
  insProvider: "Aetna",
  claimType: "Bladder Cancer",
  diagnosis: "C67.2 Malignant neoplasm of lateral wall of bladder",
  procedureCodes: "CPT 52235",
  NDCCodes: "63323-103-51 Cisplatin",
  elements: "Satisfied",
  status: "Submitted to JAG Navy Tort Claims Unit",
  lienDue: 5000,
  settlementValue: 50000,
  VAReviewer: "Review and Approved",
  reviewerName: "John Lewis",
  claimAmtSought: 50000,
  NPI: 3245734929283,
  disabilityRating: 70,
  submittingParty: "ABC Law Firm",
  leadInternalAttorney: "John Smith",
  addtlAttorneys: "N/A",
  opposingCounsel: "David Clark",
  caseReferredFrom: "Joe Smith",
  linkToRetainer: "linktoretainer.com",
  dateSignedRetainer: "Oct 4, 2022",
};

export const mockVitalsData = [
  {
    title: "Blood Pressure (mmHg)",
    value: "167/94",
    lastReading: "Today, 11:08 AM",
  },
  { title: "Heart Rate (bpm)", value: "84", lastReading: "Today, 11:34 AM" },
  {
    title: "Blood Glucose (mg/dL)",
    value: "104",
    lastReading: "Today, 5:55 PM",
  },
];

export const mockMedicationsData = [
  { title: "Lorazepam", dosage: "1MG Tab | Daily" },
  { title: "Gabapentin", dosage: "300MG Cap | Daily" },
];

export const mockAllergiesData = [
  { title: "Peanuts", ICD: "Z91.010" },
  { title: "Penicillin", ICD: "Z88.0" },
];

export const mockInsuranceData = [
  {
    title: "AvMed",
    type: "Health",
    status: "Verified",
    effectiveUntil: "Jan 1, 2024",
  },
  {
    title: "GEICO",
    type: "Auto",
    status: "Verified",
    effectiveUntil: "Aug 1, 2024",
  },
];

export const mockMedicalIssuesData = [
  {
    title: "Tinnitus",
    status: "Active",
    doctor: "Dr. James Peters",
    date: "Jan 1, 1990",
  },
  {
    title: "Pacemaker",
    status: "Active",
    doctor: "Dr. Esther Mendoza",
    date: "Aug 12, 1997"
  }
];

export const mockVaccinationsData = [
  { title: "COVID-19", provider: "Pfizer", date: "Jun 1, 2020" },
];

export const mockHealthInsuranceData = {
  name: "Edwin Rivera",
  fName: "Edwin",
  lName: "Rivera",
  dob: "10/31/1995",
};

export const mockAutoInsuranceData = {
  holder: "Edwin Rivera",
  type: "Auto - Private Passenger Voluntary",
  number: "000961269697",
  status: "Active",
  formNumber: "AU10636",
  effectiveDate: "6/10/2023",
  expirationDate: "12/10/2023",
  agency: "GEICO",
  agencyPhone: "727-375-5501",
  coveredAsset: "2008 Toyota Yaris",
  category: "Vehicle",
  coverage1: "Personal Injury Protection",
  limit1: "$10,000",
  coverage2: "Bodily Injury Liability",
  limit2: "$10,000 / $20,000",
  coverage3: "Property Damage Liability",
  limit3: "$25,000",
  deductibleDesc1: "Collision",
  deductible1: "$500",
  deductibleDesc2: "Comprehensive (Full)",
  deductible2: "$500",
};
