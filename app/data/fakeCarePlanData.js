// Fake data only. Nothing here relates to a real person.
// Values only. The page owns the labels and hint text shown beside them.
//
// Copied from care-plans/src/mocks/fakeCarePlanData.ts and converted to
// CommonJS so the prototype kit can load it. Keep the shape in step with the
// care-plans repo so the two stay interchangeable.

/**
 * @typedef {object} HealthAndCurrentConditionContent
 * @property {string[]} healthSummaryParagraphs
 * @property {string[]} legalDecisionMakerParagraphs
 * @property {string[]} otherCarePlanningDocumentsParagraphs
 */

/**
 * @typedef {object} WhatMattersToYouContent
 * @property {string} preferredName
 * @property {string[]} careAndTreatmentPrioritiesParagraphs
 * @property {string[]} valuedMostParagraphs
 * @property {string[]} thingsToAvoidParagraphs
 */

/**
 * @typedef {object} CareAndTreatmentRecommendationsContent
 * @property {string[]} carePriorityParagraphs
 * @property {string[]} specificInterventionGuidanceItems
 * @property {string} cardiopulmonaryResuscitationRecommendation
 */

/**
 * @typedef {object} SigningHealthcareProfessional
 * @property {string} name
 * @property {string} roleAndSpeciality
 * @property {string} leadHealthcareProfessional
 * @property {string} professionalRegistrationNumber
 */

/**
 * @typedef {object} HowYourPlanWasMadeContent
 * @property {string[]} involvementParagraphs
 * @property {SigningHealthcareProfessional[]} signingHealthcareProfessionals
 */

/**
 * @typedef {object} EmergencyContact
 * @property {string} name
 * @property {string} [roleAndRelationship]
 * @property {string} phoneNumber
 * @property {string} involvedInMakingThisPlan
 */

/**
 * @typedef {object} EmergencyContactsContent
 * @property {EmergencyContact} primaryEmergencyContact
 * @property {EmergencyContact[]} otherEmergencyContacts
 */

/**
 * @typedef {object} CarePlanResponse
 * @property {HealthAndCurrentConditionContent} healthAndCurrentCondition
 * @property {WhatMattersToYouContent} whatMattersToYou
 * @property {CareAndTreatmentRecommendationsContent} careAndTreatmentRecommendations
 * @property {HowYourPlanWasMadeContent} howYourPlanWasMade
 * @property {EmergencyContactsContent} emergencyContacts
 * @property {string} carePlanDocumentName
 * @property {string} carePlanDocumentPdfUrl - Prototype only, not in the care-plans repo. Link for "Download PDF".
 * @property {string} carePlanLastUpdatedDateTime
 * @property {string} carePlanCreatedAtOrganisationName
 */

// Chooses which sample care plan the prototype shows by default. To switch,
// replace the name in quotes with another name from fakeCarePlanDatasets below.
// You can also switch for a single session by adding
// ?carePlanDataset=sample-two to any URL.
const activeFakeCarePlanDataset = "sample-joe";

/** @type {CarePlanResponse} */
const sampleJoe = {
  // Copied from the NHS App prototype's emergency care plan document page.
  carePlanDocumentName: "Recommended Summary Plan for Emergency Care and Treatment (ReSPECT)",
  // Copied from the NHS App prototype's emergency care plan document page.
  carePlanDocumentPdfUrl: "/documents/Joe-ReSPECT-plan.pdf",
  // The same fictional values the NHS App prototype shows.
  carePlanLastUpdatedDateTime: "15 March 2024, 09:33",
  carePlanCreatedAtOrganisationName: "Meadow Springs Medical Centre",
  // Copied word for word from the NHS App prototype's health and current condition page.
  healthAndCurrentCondition: {
    healthSummaryParagraphs: [
      "Joe has multiple medical conditions including heart failure, diabetes, chronic kidney disease and anaemia. These are generally well managed with oversight in his care facility and occasional input from his community medical team who know his situation well, however has required admission to hospital for management at times of crisis when one of his conditions becomes unstable.",
      "Joe is aware that his conditions can be managed with ongoing treatment but cannot be reversed and may deteriorate in time. have advanced heart failure and have become increasingly frail over the last two years. I become breathless when walking short distances and often need to rest.",
    ],
    legalDecisionMakerParagraphs: ["No one chosen"],
    otherCarePlanningDocumentsParagraphs: ["No other care plans at present"],
  },
  // Copied word for word from the NHS App prototype's what matters to you page.
  whatMattersToYou: {
    preferredName: "Joe",
    careAndTreatmentPrioritiesParagraphs: ["Quality of life and comfort matters most."],
    valuedMostParagraphs: [
      "At this point in my life I would like to be kept comfortable and only receive treatments which allow me to stay in my home. I am reluctant to be admitted to hospital.",
    ],
    thingsToAvoidParagraphs: [
      "I don't want lots of painful investigations and treatments. I don't want anyone pressing on my chest if my heart stops.",
    ],
  },
  // Copied word for word from the NHS App prototype's care and treatment recommendations page.
  careAndTreatmentRecommendations: {
    carePriorityParagraphs: ["Priority should be given to comfort."],
    specificInterventionGuidanceItems: [
      "Prioritise treatments that can be administered in the community (e.g. IV diuretics if appropriate).",
      "Involve community heart failure team early.",
      "Avoid invasive treatments such as organ support or CPR.",
      "Consider assessment in emergency department in unforseen, potentially treatable situations e.g. after a fall.",
      "Prioritise comfort and symptom control in event of deterioration of diagnosed conditions.",
    ],
    cardiopulmonaryResuscitationRecommendation: "CPR is NOT recommended",
  },
  // Copied word for word from the NHS App prototype's how your plan was made page.
  howYourPlanWasMade: {
    involvementParagraphs: [
      "You have the mental capacity to participate in making these recommendations. You have been fully involved in this plan.",
    ],
    signingHealthcareProfessionals: [
      {
        name: "Dr Bally Valentine",
        roleAndSpeciality: "GP",
        leadHealthcareProfessional: "Yes",
        professionalRegistrationNumber: "GMC 4123485",
      },
    ],
  },
  // Copied from the NHS App prototype's emergency contacts page, except the
  // phone numbers, which come from Ofcom's ranges reserved for drama use.
  emergencyContacts: {
    primaryEmergencyContact: {
      name: "Clive Campbell",
      roleAndRelationship: "Nephew",
      phoneNumber: "07700 900541",
      involvedInMakingThisPlan: "Yes",
    },
    otherEmergencyContacts: [
      { name: "Community Heart Failure Team", phoneNumber: "01632 960775", involvedInMakingThisPlan: "No" },
      { name: "GP surgery", phoneNumber: "01632 960555", involvedInMakingThisPlan: "No" },
    ],
  },
};

// Invented for demonstrations, so reviewers can see the pages with different
// content: CPR recommended, a legal decision maker, two signing professionals
// and a single other contact. Phone numbers come from Ofcom's ranges reserved
// for drama use. The registration numbers are made up.
/** @type {CarePlanResponse} */
const sampleTwo = {
  carePlanDocumentName: "Recommended Summary Plan for Emergency Care and Treatment (ReSPECT)",
  carePlanDocumentPdfUrl: "#",
  carePlanLastUpdatedDateTime: "23 October 2026 10:12",
  carePlanCreatedAtOrganisationName: "Fake GP Surgery",
  healthAndCurrentCondition: {
    healthSummaryParagraphs: [
      "Fake patient with multiple chronic conditions.",
      "Fake second line.",
    ],
    legalDecisionMakerParagraphs: ["Fake data for legal decision maker."],
    otherCarePlanningDocumentsParagraphs: ["Fake other care planning documents."],
  },
  whatMattersToYou: {
    preferredName: "Obvious Fake Name",
    careAndTreatmentPrioritiesParagraphs: [
      "Fake care and treatment priority.",
    ],
    valuedMostParagraphs: [
      "Fake valued most.",
    ],
    thingsToAvoidParagraphs: [
      "Fake things to avoid.",
      "Second Fake thing to avoid.",
    ],
  },
  careAndTreatmentRecommendations: {
    carePriorityParagraphs: ["Fake care priority."],
    specificInterventionGuidanceItems: [
      "Fake specific intervention guidance.",
      "Another fake specific intervention guidance.",
      "Even more fake specific intervention guidance.",
    ],
    cardiopulmonaryResuscitationRecommendation: "Fake CPR recommendation",
  },
  howYourPlanWasMade: {
    involvementParagraphs: [
      "Fake involvement paragraph.",
      "Another fake involvement paragraph.",
    ],
    signingHealthcareProfessionals: [
      {
        name: "Fake Doctor Name",
        roleAndSpeciality: "GP",
        leadHealthcareProfessional: "Yes",
        professionalRegistrationNumber: "Fake Number",
      },
      {
        name: "Fake Nurse Name",
        roleAndSpeciality: "Community respiratory nurse",
        leadHealthcareProfessional: "No",
        professionalRegistrationNumber: "Fake Number",
      },
    ],
  },
  emergencyContacts: {
    primaryEmergencyContact: {
      name: "Fake relative",
      roleAndRelationship: "Daughter",
      phoneNumber: "00000 000000",
      involvedInMakingThisPlan: "Yes",
    },
    otherEmergencyContacts: [
      { name: "Fake other contact", phoneNumber: "00000 000000", involvedInMakingThisPlan: "No" },
    ],
  },
};

// Invented for demonstrations, so reviewers can see the pages with different
// content: CPR recommended, a legal decision maker, two signing professionals
// and a single other contact. Phone numbers come from Ofcom's ranges reserved
// for drama use. The registration numbers are made up.
/** @type {CarePlanResponse} */
const sampleThree = {
  carePlanDocumentName: "Recommended Summary Plan for Emergency Care and Treatment (ReSPECT)",
  carePlanDocumentPdfUrl: "#",
  carePlanLastUpdatedDateTime: "23 October 2026 10:12",
  carePlanCreatedAtOrganisationName: "Fake GP Surgery",
  healthAndCurrentCondition: {
    healthSummaryParagraphs: [
      "Fake patient with multiple chronic conditions.",
      "Fake second line.",
    ],
    legalDecisionMakerParagraphs: ["Fake data for legal decision maker."],
    otherCarePlanningDocumentsParagraphs: ["Fake other care planning documents."],
  },
  whatMattersToYou: {
    preferredName: "Obvious Fake Name",
    careAndTreatmentPrioritiesParagraphs: [
      "Fake care and treatment priority.",
    ],
    valuedMostParagraphs: [
      "Fake valued most.",
    ],
    thingsToAvoidParagraphs: [
      "Fake things to avoid.",
      "Second Fake thing to avoid.",
    ],
  },
  careAndTreatmentRecommendations: {
    carePriorityParagraphs: ["Fake care priority."],
    specificInterventionGuidanceItems: [
      "Fake specific intervention guidance.",
      "Another fake specific intervention guidance.",
      "Even more fake specific intervention guidance.",
    ],
    cardiopulmonaryResuscitationRecommendation: "Fake CPR recommendation",
  },
  howYourPlanWasMade: {
    involvementParagraphs: [
      "Fake involvement paragraph.",
      "Another fake involvement paragraph.",
    ],
    signingHealthcareProfessionals: [
      {
        name: "Fake Doctor Name",
        roleAndSpeciality: "GP",
        leadHealthcareProfessional: "Yes",
        professionalRegistrationNumber: "Fake Number",
      },
      {
        name: "Fake Nurse Name",
        roleAndSpeciality: "Community respiratory nurse",
        leadHealthcareProfessional: "No",
        professionalRegistrationNumber: "Fake Number",
      },
    ],
  },
  emergencyContacts: {
    primaryEmergencyContact: {
      name: "Fake relative",
      roleAndRelationship: "Daughter",
      phoneNumber: "00000 000000",
      involvedInMakingThisPlan: "Yes",
    },
    otherEmergencyContacts: [
      { name: "Fake other contact", phoneNumber: "00000 000000", involvedInMakingThisPlan: "No" },
    ],
  },
};

// Invented for demonstrations, so reviewers can see the pages with different
// content: CPR recommended, a legal decision maker, two signing professionals
// and a single other contact. Phone numbers come from Ofcom's ranges reserved
// for drama use. The registration numbers are made up.
/** @type {CarePlanResponse} */
const sampleFour = {
  carePlanDocumentName: "Recommended Summary Plan for Emergency Care and Treatment (ReSPECT)",
  carePlanDocumentPdfUrl: "#",
  carePlanLastUpdatedDateTime: "23 October 2026 10:12",
  carePlanCreatedAtOrganisationName: "Fake GP Surgery",
  healthAndCurrentCondition: {
    healthSummaryParagraphs: [
      "Fake patient with multiple chronic conditions.",
      "Fake second line.",
    ],
    legalDecisionMakerParagraphs: ["Fake data for legal decision maker."],
    otherCarePlanningDocumentsParagraphs: ["Fake other care planning documents."],
  },
  whatMattersToYou: {
    preferredName: "Obvious Fake Name",
    careAndTreatmentPrioritiesParagraphs: [
      "Fake care and treatment priority.",
    ],
    valuedMostParagraphs: [
      "Fake valued most.",
    ],
    thingsToAvoidParagraphs: [
      "Fake things to avoid.",
      "Second Fake thing to avoid.",
    ],
  },
  careAndTreatmentRecommendations: {
    carePriorityParagraphs: ["Fake care priority."],
    specificInterventionGuidanceItems: [
      "Fake specific intervention guidance.",
      "Another fake specific intervention guidance.",
      "Even more fake specific intervention guidance.",
    ],
    cardiopulmonaryResuscitationRecommendation: "Fake CPR recommendation",
  },
  howYourPlanWasMade: {
    involvementParagraphs: [
      "Fake involvement paragraph.",
      "Another fake involvement paragraph.",
    ],
    signingHealthcareProfessionals: [
      {
        name: "Fake Doctor Name",
        roleAndSpeciality: "GP",
        leadHealthcareProfessional: "Yes",
        professionalRegistrationNumber: "Fake Number",
      },
      {
        name: "Fake Nurse Name",
        roleAndSpeciality: "Community respiratory nurse",
        leadHealthcareProfessional: "No",
        professionalRegistrationNumber: "Fake Number",
      },
    ],
  },
  emergencyContacts: {
    primaryEmergencyContact: {
      name: "Fake relative",
      roleAndRelationship: "Daughter",
      phoneNumber: "00000 000000",
      involvedInMakingThisPlan: "Yes",
    },
    otherEmergencyContacts: [
      { name: "Fake other contact", phoneNumber: "00000 000000", involvedInMakingThisPlan: "No" },
    ],
  },
};



// Joe's plan as the NHS App prototype's "partially complete plan" shows it.
// Reuses sampleJoe's values. Empty arrays and blank strings are the sections
// the partial pages show as "No information available". Only the values
// that differ from sampleJoe are set here.
/** @type {CarePlanResponse} */
const sampleJoePartial = {
  ...sampleJoe,
  // Copied from the NHS App prototype's partial emergency care plan document page.
  carePlanDocumentPdfUrl: "/documents/Joe-ReSPECT-plan-partial.pdf",
  // Copied from the NHS App prototype's partial emergency care plan page.
  carePlanCreatedAtOrganisationName: "Shrewsbury Hospital",
  healthAndCurrentCondition: {
    healthSummaryParagraphs: [],
    legalDecisionMakerParagraphs: [],
    otherCarePlanningDocumentsParagraphs: [],
  },
  whatMattersToYou: {
    preferredName: "",
    careAndTreatmentPrioritiesParagraphs: [],
    valuedMostParagraphs: [],
    thingsToAvoidParagraphs: [],
  },
  careAndTreatmentRecommendations: {
    ...sampleJoe.careAndTreatmentRecommendations,
    carePriorityParagraphs: [],
    specificInterventionGuidanceItems: [],
  },
  howYourPlanWasMade: {
    ...sampleJoe.howYourPlanWasMade,
    involvementParagraphs: [],
  },
  emergencyContacts: {
    primaryEmergencyContact: { name: "", phoneNumber: "", involvedInMakingThisPlan: "" },
    otherEmergencyContacts: [],
  },
};

// Add a new sample by giving it a name here, then select it with activeFakeCarePlanDataset.
/** @type {Record<string, CarePlanResponse>} */
const fakeCarePlanDatasets = {
  "sample-joe": sampleJoe,
  "sample-joe-partial": sampleJoePartial,
  "sample-two": sampleTwo,
  "sample-four": sampleFour,
  "sample-three": sampleThree,
};

/** @type {CarePlanResponse} */
const fakeCarePlanResponse = fakeCarePlanDatasets[activeFakeCarePlanDataset];

module.exports = {
  activeFakeCarePlanDataset,
  fakeCarePlanDatasets,
  fakeCarePlanResponse,
};
