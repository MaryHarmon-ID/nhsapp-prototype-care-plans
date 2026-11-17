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

// Chooses which sample care plan the prototype shows by default. To switch,
// replace the name in quotes with another name from fakeCarePlanDatasets below.
// You can also switch for a single session by adding
// ?carePlanDataset=sample-two to any URL.

/** @type {CarePlanResponse} */
const sampleMuriel = {
  // Copied from the uploaded ResPECT Plus document.
  carePlanDocumentName: "Recommended Summary Plan for Emergency Care and Treatment (ReSPECT) Plus",
  // Copied from the uploaded ResPECT Plus document.
  carePlanDocumentPdfUrl: "/documents/ReSPECT-Plus-Muriel.pdf",
  // Copied from the uploaded ResPECT Plus document and made Bristol community hospital up.
  carePlanLastUpdatedDateTime: "09 September 2026",
  carePlanCreatedAtOrganisationName: "Bristol Community Hospital",
  // Copied from the uploaded ResPECT Plus document.
  healthAndCurrentCondition: {
    healthSummaryParagraphs: [
  "Acute kidney injury stage 1. Patient fully aware. Patient has been updated with regards to the primary diagnosis and the complications that are going to be involved with treatments going forward.",
  "Osteoarthritis and atrial fibrillation need to be heavily monitored throughout the patients treatment. Lives alone - help available. Lives in Extra Care housing Visual impairment. Cognitivie im (cont.)",
  ],
    legalDecisionMakerParagraphs: ["Yes, Robert Jones, son"],
    otherCarePlanningDocumentsParagraphs: ["Has ADRT (advance decision to refuste treatment) (Mental Capacity Act 2005). Bedside drawer in binder. Has advance care plan."],
  },
  // Copied from the uploaded ResPECT Plus document.
  whatMattersToYou: {
    preferredName: "Muriel",
    careAndTreatmentPrioritiesParagraphs: ["For care at home and any discomfort or distress treated effectively; not for hospital admission, but for active treatment in the community (eg oral antibiotics for infections)"],
    valuedMostParagraphs: [
      "I would like to remain in a state of comfort I want to remain active as much as I can",
    ],
    thingsToAvoidParagraphs: [
      "I don't want to be a burden or feel unnecessary pain",
    ],
  },
  // Copied from the uploaded ResPECT Plus document.
  careAndTreatmentRecommendations: {
    carePriorityParagraphs: ["Balance extending life with comfort and valued outcomes."],
    specificInterventionGuidanceItems: [
      "CPR attempts recommended.",
    ],
    cardiopulmonaryResuscitationRecommendation: "CPR is NOT recommended",
  },
  // Copied from the uploaded ResPECT Plus document.
  howYourPlanWasMade: {
    involvementParagraphs: [
      "The person has capacity to participate in making recommendationso on this plan.",
    ],
    signingHealthcareProfessionals: [
      {
        name: "Dr Martin Hobbs",
        roleAndSpeciality: "GP",
        leadHealthcareProfessional: "Yes",
        professionalRegistrationNumber: "GMC 5843214",
      },
    ],
  },
  // Copied from the NHS App prototype's emergency contacts page, except the
  // phone numbers, which come from Ofcom's ranges reserved for drama use.
  emergencyContacts: {
    primaryEmergencyContact: {
      name: "Edward Jones",
      roleAndRelationship: "Spouse",
      phoneNumber: "07986547411",
      involvedInMakingThisPlan: "Yes",
    },
    otherEmergencyContacts: [
      { name: "Robert Jones", roleAndRelationship: "Son", phoneNumber: "01918798745", involvedInMakingThisPlan: "Yes" },
      { name: "John Robinson", roleAndRelationship: "Friend", phoneNumber: "01913216547", involvedInMakingThisPlan: "No" },
      { name: "Alison Robinson", roleAndRelationship: "Sister", phoneNumber: "071236987545", involvedInMakingThisPlan: "No" },
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
  "sample-murial": sampleMuriel,
};

/** @type {CarePlanResponse} */
const fakeCarePlanResponse = fakeCarePlanDatasets[activeFakeCarePlanDataset];

module.exports = {
  activeFakeCarePlanDataset,
  fakeCarePlanDatasets,
  fakeCarePlanResponse,
};
