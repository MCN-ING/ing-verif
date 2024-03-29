const translation = {
  Global: {
    Continue: 'Continue',
    Back: 'Back',
    Attributes: 'Attributes',
    GoBackHome: 'Go back to home',
  },
  Agent: {
    ErrorTitle: 'Agent initialization',
    Error: 'An error occurred while initializing the agent',
  },
  Home: {
    Title: 'Verify an identity',
    Slider: {
      Title1: 'Select a request',
      Title2: 'Change verification schema',
    },
  },
  QRCode: {
    Title: 'Connect with a QR code',
    Instructions: 'Scan the QR code from the digital wallet app to create a connection and share information.',
    GenerateNew: 'Generate a new QR code',
    UseBluetooth: 'Use Bluetooth',
  },
  ValidationLoading: {
    Title: 'Reception in progress',
    Footer: 'Receiving information in progress...',
    CancelButton: 'Cancel',
  },
  ValidationBanner: {
    SuccessTitle: 'The information are valid',
    SuccessBody: 'The user has successfully shared the information to you.',
    ErrorTitle: 'The information is invalid',
    ErrorBody: 'The user was unable to share the information with you.',
  },
  ActivityLog: {
    EmptyTitle: 'Activity',
    Title: 'New activities',
    EmptyBody: 'You are up to date, there is nothing new.',
  },
  Request: {
    Title: 'Choice of a request',
  },
  Footer: {
    Title: 'Government of Quebec',
  },
  Dropdown: {
    Select: 'Select an attribute',
  },
  Error: {
    AddRequestError: 'Error',
    EmptyTitle: 'Request name is required.',
    EmptyAttributes: 'The list of attributes cannot be empty.',
  },
  ManageRequests: {
    Title: 'List of Submission Requests',
    AddButtonText: 'Add New Request',
    RequestTitle: 'Name of the request',
    RequestDescription: 'Description of the request',
    TitlePlaceholder: 'Name of the request',
    DescriptionPlaceholder: 'Description of the request',
    RequestAttributes: 'List of attributes',
    AddAttribute: 'Add an attribute',
    SaveRequest: 'Save the request',
    Cancel: 'Cancel',
  },
  RequestDetails: {
    Name: 'Request Name',
    Description: 'Request Description',
    Attributes: 'Request Attributes',
    Predicates: 'Request Predicates',
    UseRequestButton: 'Use the Request',
    DeleteRequestButton: 'Delete Request',
    BackToRequestListButton: 'Back to the List of Requests',
    ModifyRequestButton: 'Edit',
    EmptyList: 'Your list of presentation requests is empty. Please add one in order to use the application.',
  },
  Screens: {
    Home: 'Home',
    QRCode: 'Connection',
    Validation: 'Verification',
    Requests: 'Requests',
    ManageRequests: 'Request Management',
    AddRequest: 'Add a request',
    RequestDetails: 'Request Details',
    Settings: 'More option',
  },
  SettingsList: {
    Title: "More option",
    AppSetting: "App Settings",
    HelpCenter: "Help Center",
    About: 'About',
    ContactUs: 'Contact US',
    SaveSettings: 'Save Update',
    Cancel: 'Cancel',
  },
  AppSettingsList: {
    Title: "App Settings",
    DisplayLanguage: "Display language",
    History: "History",
    Notification: 'The notifications',
    AppVersion: 'App version',
  },
  DisplayLanguage: {
    Title: "Display language",
  },
  LanguageList: {
    English: "English",
    French: "French",
  },
  History: {
    Title: "History",
    Body: "How long do you want the transaction history to be stored in memory?",
    Subtitle: "History duration",
  },
  HistoryList: {
    None: "Do not save history",
    Week: "7 days",
    HalfMonth: "15 days",
    Month: '30 days (default)',
    Quarter: "90 days",
    Year: "365 days",
    All: "Keep all history",
  },
  Notification: {
    Title: "The notifications",
  },
  HelpCenterList: {
    Title: "Help Center",
    AppTutorial: "The app tutorial",
    UserManual: "User manual",
    TransferWallet: 'How to transfer my wallet to another device',
    ImproveApp: 'Help us improve the app',
  },
  AppTutorial: {
    Title: "The app tutorial",
  },
  UserManual: {
    Title: "User manual",
  },
  TransferWalletApp: {
    Title: "How to transfer my wallet to another device",
  },
  ImproveApp: {
    Title: "Help us improve the app",
  },
  AboutList: {
    Title: "About",
    TermsUse: "Terms of use",
    Confidentiality: "Confidentiality declaration",
    Vulnerability: 'Vulnerability Disclosure Policy',
    Accessibility: 'Accessibility',
  },
  TermsUse: {
    Title: "Terms of use",
  },
  Confidentiality: {
    Title: "Confidentiality declaration",
  },
  Vulnerability: {
    Title: "Vulnerability Disclosure Policy",
  },
  Accessibility: {
    Title: "Accessibility",
  },
  ContactUsList: {
    Title: "Contact Us",
    Phone: "Phone",
    ByEmail: "By email",
    ReportProblem: 'Report a problem',
  },
  Phone: {
    Title: "Phone",
  },
  ByEmail: {
    Title: "By email",
  },
  ReportProblem: {
    Title: "Report a problem",
  },
  EditRequest: {
    Title: 'Modify The Name',
    Description: 'Modify The Description',
    Attributes: 'Modify The Attributes',
    Cancel: 'Cancel Change',
    Save: 'Save Changes',
    CharacterCount: 'characters',
  },
  RequestsList: {
    Title1: 'Validation of age (18+)',
    Description1: 'Check that a person is 18 years of age or older.',
    Title2: 'Validation of seniority (65+)',
    Description2: 'Check that a person is 65 years of age or older.',
    Title3: 'Validation of identity',
    Description3: 'Check the last name and first name of a person.',
    Title4: 'Validation of date of birth',
    Description4: 'Check the date of birth of a person.',
  },
  TermsV2: {
    title: 'Terms and Conditions',
    IAgree: 'I Agree',
    Credential: {
      Body: 'I have read, understand and accept the terms of this EULA.',
      Error: 'Please check the box above to continue.',
    },
    Consent: {
      title: 'Consent',
      body: 'Please read the general conditions for the use of the digital portfolio of the Government of Quebec.',
      PersonalUse: {
        title: 'Exclusive Personal Use',
        body:
          'You are responsible for the confidentiality of your digital portfolio. You must use it exclusively for your own purposes. Do not divulge your access code to anyone and protect your mobile phone adequately.\n' +
          'You will find recommendations in the Security section.',
        subsection: {
          title: 'Acceptable Use',
          body:
            'In connection with your use of the Licensed Application, you shall not take any action that may jeopardise the security, integrity and/or availability of the Licensed Application, including, without limitation:  \n' +
            '\n' +
            'Using the Licensed Application for illegal or improper purposes;  \n' +
            '\n' +
            'Tampering with any part of the Licensed Application;  \n' +
            '\n' +
            'Using the Licensed Application to transmit any virus or other harmful or destructive computer code, files or programs, or to conduct hacking and/or intrusive activities;  \n' +
            '\n' +
            'Attempt to circumvent or subvert any security measures associated with the Licensed Application;  \n' +
            '\n' +
            'Take any action that could reasonably be construed to adversely affect other users of the Licensed Application;  \n' +
            '\n' +
            'Where  \n' +
            '\n' +
            'Remove or alter any proprietary symbols or notices, including any copyright, trademark or logo notices, displayed in connection with the Licensed Application.  ',
        },
      },
      IdentityTheft: {
        title: 'In case of identity theft',
        body: 'If you suspect that the security of your wallet and its contents has been compromised, you must contact *the Identity Quebec Customer Relations Centre* immediately. You will not be held responsible for identity theft as long as you comply with these terms and conditions',
        subsection: {
          title: 'Indemnification',
          body:
            'You agree to indemnify, defend and hold harmless the Province and all of its respective officers, employees and agents from and against any and all claims, demands, obligations, losses, liabilities, costs or debts and expenses (including, without limitation, reasonable legal fees).\n' +
            '\n' +
            ' Arising out of:\n' +
            '\n' +
            ' (a) your use of the Licensed Application;\n' +
            '\n' +
            ' Where\n' +
            '\n' +
            ' (b) your breach of any provision of this EULA',
        },
      },
      Privacy: {
        title: 'Protection and privacy',
        body: "The Government of Quebec is concerned about the protection of your privacy and the personal and confidential information contained in this application. You are responsible for consulting the 'Privacy Policy' to learn about the Government of Quebec's practices in this regard",
        subsection: {
          title: 'Personal Information Protection',
          body:
            'If you visit the website of the application licensed to\n' +
            '\n' +
            'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique,\n' +
            '\n' +
            'including accessing the Help Function for the licensed application or related content at https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique, certain information will be provided to you in accordance with the Province\'s Privacy Statement for Government Websites. Certain information is also collected as part of the licence application as set out in the Quebec Wallet App Privacy Policy (the "Privacy Policy"), which is incorporated by reference into and forms part of this EULA. You consent to the collection by the Licensed App of such information which, together with your Content, is stored locally on your device and is not accessible to the Province, except in cases where you choose to provide information to the Province as set forth in the Privacy Policy. Any information you provide to the Province that is "personal information", as defined in the Quebec Freedom of Information and Protection of Privacy Act ("the Act"), is collected by the Province pursuant to section 26c of the Act, for the purposes set out in the Privacy Policy. Any questions regarding the collection of this information may be directed to the contact person identified in Section 11. The consents you have provided pursuant to this section will continue until you revoke them in writing to the contact person identified in section 11, at which time this EULA will terminate immediately in accordance with section 9.',
        },
      },
      AppAccess: {
        title: 'Right of access to the application',
        body: 'The Government of Quebec may suspend access to this application if you fail to comply with these terms of use. It may also do so for these terms of use. It may also do so for security or administrative purposes',
        subsection: {
          title: 'Limitation of liability',
          body:
            'To the extent permitted by applicable law, in no event shall the Province be liable to any person or entity for any direct, indirect, special, incidental or consequential loss, claim, injury or damage, or for any other loss, claim, injury or damage.  \n' +
            '\n' +
            'If foreseeable or unforeseeable (including claims for limitation of damages for loss of profits or business opportunities, use or misuse of, or inability to use, the Licensed Application, interruptions, deletion or corruption of files, loss of programs or information, errors, defects or delays) arising out of or in any way connected with your use of the Licensed Application, whether based on contract, tort, strict liability or any other legal theory. The preceding sentence shall apply even if the Province has been expressly advised of the possibility of such loss, claim, injury or damage. The parties acknowledge that Apple is not responsible for: \n' +
            '\n' +
            '(a) dealing with any claim you or any third party may have in connection with the Authorized Application;  \n' +
            '\n' +
            'b) your possession and/or use of the Permitted Application.',
        },
      },
      More: {
        body: 'Learn more about *these terms and conditions(*)*',
      },
    },
  },
  Attributes: {
    given_names: 'First name',
    family_name: 'Last name',
    birthdate_dateint: 'Majority Verification',
    picture: 'Picture',
    issue_date_dateint: 'Issue date',
    expiry_date_dateint: 'Valid expiry date',
    issuing_jurisdiction: 'Issuing jurisdiction',
    Predicate: {
      age: {
        '>=': '{{value}} years old and over',
        '<=': '{{value}} years old and under',
      },
      birthdate_dateint: {
        '<=': '{{value}} years old and over',
        '<': 'Over {{value}} years old',
        '>': 'Under {{value}} years old',
        '>=': '{{value}} years old and under',
      },
    },
  },
}

export default translation
