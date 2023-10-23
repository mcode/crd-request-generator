const headerDefinitions = {
    alternativeTherapy: { 
        display: 'Alternative Therapy Cards Allowed',
        type: 'check'
    }, 
    baseUrl: { 
        display: 'Base Server',
        type: 'input'
    },
    cdsUrl: { 
        display: 'REMS Admin',
        type: 'input'
    },
    defaultUser: { 
        display: 'Default User',
        type: 'input'
    },
    ehrUrl: { 
        display: 'EHR Server',
        type: 'input'
    },
    includeConfig: { 
        display: 'Include Configuration in CRD Request',
        type: 'check'
    },
    launchUrl: { 
        display: 'DTR Launch URL (QuestionnaireForm)',
        type: 'input'
    },
    orderSelect: { 
        display: 'Order Select Rest End Point',
        type: 'input'
    },
    orderSign: { 
        display: 'Order Sign Rest End Point',
        type: 'input'
    },
    patientView: {
        display: 'Patient View Rest End Point',
        type: 'input',
    },
    pimsUrl: { 
        display: 'PIMS Server',
        type: 'input'
    },
    responseExpirationDays: { 
        display: 'In Progress Form Expiration Days',
        type: 'input'
    },
    sendPrefetch: { 
        display: 'Send Prefetch',
        type: 'check'
    },
    smartAppUrl: { 
        display: 'SMART App',
        type: 'input'
    }
};

const types = {
    error: 'errorClass',
    info: 'infoClass',
    debug: 'debugClass',
    warning: 'warningClass'
};

const genderOptions = {
    option1: {
        text: 'Male',
        value: 'male'
    },
    option2: {
        text: 'Female',
        value: 'female'
    }
};

const stateOptions = [
    { key: 'AL', value: 'AL', text: 'Alabama' },
    { key: 'AK', value: 'AK', text: 'Alaska' },
    { key: 'AZ', value: 'AZ', text: 'Arizona' },
    { key: 'AR', value: 'AR', text: 'Arkansas' },
    { key: 'CA', value: 'CA', text: 'California' },
    { key: 'CO', value: 'CO', text: 'Colorado' },
    { key: 'CT', value: 'CT', text: 'Connecticut' },
    { key: 'DE', value: 'DE', text: 'Delaware' },
    { key: 'DC', value: 'DC', text: 'District Of Columbia' },
    { key: 'FL', value: 'FL', text: 'Florida' },
    { key: 'GA', value: 'GA', text: 'Georgia' },
    { key: 'HI', value: 'HI', text: 'Hawaii' },
    { key: 'ID', value: 'ID', text: 'Idaho' },
    { key: 'IL', value: 'IL', text: 'Illinois' },
    { key: 'IN', value: 'IN', text: 'Indiana' },
    { key: 'IA', value: 'IA', text: 'Iowa' },
    { key: 'KS', value: 'KS', text: 'Kansas' },
    { key: 'KY', value: 'KY', text: 'Kentucky' },
    { key: 'LA', value: 'LA', text: 'Louisiana' },
    { key: 'ME', value: 'ME', text: 'Maine' },
    { key: 'MD', value: 'MD', text: 'Maryland' },
    { key: 'MA', value: 'MA', text: 'Massachusetts' },
    { key: 'MI', value: 'MI', text: 'Michigan' },
    { key: 'MN', value: 'MN', text: 'Minnesota' },
    { key: 'MS', value: 'MS', text: 'Mississippi' },
    { key: 'MO', value: 'MO', text: 'Missouri' },
    { key: 'MT', value: 'MT', text: 'Montana' },
    { key: 'NE', value: 'NE', text: 'Nebraska' },
    { key: 'NV', value: 'NV', text: 'Nevada' },
    { key: 'NH', value: 'NH', text: 'New Hampshire' },
    { key: 'NJ', value: 'NJ', text: 'New Jersey' },
    { key: 'NM', value: 'NM', text: 'New Mexico' },
    { key: 'NY', value: 'NY', text: 'New York' },
    { key: 'NC', value: 'NC', text: 'North Carolina' },
    { key: 'ND', value: 'ND', text: 'North Dakota' },
    { key: 'OH', value: 'OH', text: 'Ohio' },
    { key: 'OK', value: 'OK', text: 'Oklahoma' },
    { key: 'OR', value: 'OR', text: 'Oregon' },
    { key: 'PA', value: 'PA', text: 'Pennsylvania' },
    { key: 'RI', value: 'RI', text: 'Rhode Island' },
    { key: 'SC', value: 'SC', text: 'South Carolina' },
    { key: 'SD', value: 'SD', text: 'South Dakota' },
    { key: 'TN', value: 'TN', text: 'Tennessee' },
    { key: 'TX', value: 'TX', text: 'Texas' },
    { key: 'UT', value: 'UT', text: 'Utah' },
    { key: 'VT', value: 'VT', text: 'Vermont' },
    { key: 'VA', value: 'VA', text: 'Virginia' },
    { key: 'WA', value: 'WA', text: 'Washington' },
    { key: 'WV', value: 'WV', text: 'West Virginia' },
    { key: 'WI', value: 'WI', text: 'Wisconsin' },
    { key: 'WY', value: 'WY', text: 'Wyoming' },
  ];

  const defaultValues = [
    { key: 'CPAP', text: 'E0601', value: 'E0601', codeSystem: 'https://bluebutton.cms.gov/resources/codesystem/hcpcs' },
    { key: 'Wheelchair', text: '97542', value: '97542', codeSystem: 'http://www.ama-assn.org/go/cpt' },
    { key: 'Crutches', text: 'E0110', value: 'E0110', codeSystem: 'https://bluebutton.cms.gov/resources/codesystem/hcpcs' },
    { key: 'Hospital Bed', text: 'E0250', value: 'E0250', codeSystem: 'https://bluebutton.cms.gov/resources/codesystem/hcpcs' },
    { key: 'Continuous Glucose Monitoring', text: '95250', value: '95250', codeSystem: 'http://www.ama-assn.org/go/cpt' },
    { key: 'Nebulizer', text: '94640', value:'94640', codeSystem: 'http://www.ama-assn.org/go/cpt' },
    { key: 'Glucose Test Strip', text:'82947', value:'82947', codeSystem: 'http://www.ama-assn.org/go/cpt'},
    { key: 'Oxygen Therapy', text: 'E0424', value:'E0424', codeSystem:'https://bluebutton.cms.gov/resources/codesystem/hcpcs' }
];

const shortNameMap = {
    'http://www.ama-assn.org/go/cpt':'CPT',
    'https://bluebutton.cms.gov/resources/codesystem/hcpcs': 'HCPCS',
    'http://www.nlm.nih.gov/research/umls/rxnorm': 'RxNorm',
    'http://hl7.org/fhir/sid/ndc': 'NDC'
};

  export {
      defaultValues,
      genderOptions,
      headerDefinitions,
      shortNameMap,
      stateOptions,
      types,
  };