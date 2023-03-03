const translation = {
  Global: {
    Continue: 'Continuer',
    Back: 'Retour',
    Attributes: 'Attributs',
  },
  Agent: {
    ErrorTitle: "Initialisation de l'agent",
    Error: "Une erreur s'est produite lors de l'initialisation de l'agent",
  },
  Home: {
    Title: 'Vérifier une identité',
    Slider: {
      Title1: 'Sélectionner une requête',
      Title2: 'Changer le schéma de vérification',
    },
  },
  QRCode: {
    Title: 'Connectez-vous avec un code QR',
    Instructions:
      "Numérisez le code QR depuis l'application de portefeuille numérique pour créer une connexion et partager des informations.",
    GenerateNew: 'Générer un nouveau code QR',
    UseBluetooth: 'Utiliser Bluetooth',
  },
  ValidationLoading: {
    Title: 'Réception en cours',
    Footer: 'Réception des informations en cours...',
    CancelButton: 'Annuler',
  },
  ValidationBanner: {
    SuccessTitle: 'Les informations sont valides',
    SuccessBody: "L'utilisateur vous a partagé les informations avec succès.",
    ErrorTitle: 'Les informations ne sont pas valides',
    ErrorBody: "L'utilisateur n'a pas pu partager les informations avec vous.",
  },
  ActivityLog: {
    EmptyTitle: 'Activité',
    Title: 'Nouvelles activités',
    EmptyBody: "Vous êtes à jour, il n'y a rien de nouveau.",
  },
  Request: {
    Title: "Choix d'une requête",
  },
  ManageRequests: {
    Title: 'Liste des requêtes de présentation',
    AddButtonText: 'Ajouter une nouvelle requête',
    RequestTitle: 'Nom de la requête',
    RequestDescription: 'Description de la requête',
    TitlePlaceholder: 'Nom de la requête',
    DescriptionPlaceholder: 'Description de la requête',
    RequestAttributes: 'Liste des attributs',
    RequestPredicates: 'Liste des prédicats',
    AddAttribute: 'Ajouter un attribut',
    SaveRequest: 'Enregistrer la requête',
    Cancel: 'Annuler',
  },
  sections: {
    schema: 'Schémas',
  },
  Screens: {
    Home: 'Accueil',
    QRCode: 'Connexion',
    Validation: 'Vérification',
    Requests: 'Requêtes',
    ManageRequests: 'Gestion des requêtes',
  },
  RequestsList: {
    Title1: "Vérification de l'âge (18+)",
    Description1: "Vérifiez qu'une personne est âgée de 18 ans ou plus.",
    Title2: 'Vérification de la séniorité (65+)',
    Description2: "Vérifiez qu'une personne est âgée de 65 et plus.",
    Title3: 'Vérification de l’identité',
    Description3: 'Vérifiez le nom et prénom d’une personne.',
    Title4: 'Vérification de la date de naissance',
    Description4: 'Vérifiez la date de naissance d’une personne.',
  },
  Dropdown: {
    Select: 'Sélectionner un attribut',
  },
  Error: {
    AddRequestError: 'Erreur',
    EmptyTitle: 'Le nom ne peut pas être vide',
    EmptyAttributes: 'La liste des attributs ne peut pas être vide',
  },
  TermsV2: {
    title: "Conditions d'utilisation",
    IAgree: "J'accepte",
    Credential: {
      Body: "J'ai lu, je comprends et j'accepte les conditions.",
      Error: 'Veuillez cocher la case ci-dessus.',
    },
    Consent: {
      IAgree: "J'accepte",
      title: 'Consentement',
      body: "Veuillez prendre connaissance des conditions générales liées à l'utilisation du portefeuille numérique du gouvernement du Québec.",
      PersonalUse: {
        title: 'Usage personnel exclusif',
        body: "Vous êtes responsable de la confidentialité de votre portefeuille numérique. Vous devez le réaliser à votre usage exclusif. Ne divulguez à personne votre code d'accès et protégez adéquatement votre téléphone mobile. Des recommandations vous sont présentées dans la rubrique *Sécurité* .",
        subsection: {
          title: 'Utilisation acceptable',
          body:
            "Dans le cadre de votre utilisation de l'Application sous Licence, vous ne devez prendre aucune mesure susceptible de mettre en péril la sécurité, l'intégrité et/ou la disponibilité de l'Application sous Licence, y compris, sans s'y limiter :\n" +
            '\n' +
            "L’utilisation de l'Application sous Licence à des fins illégales ou inappropriées ;\n" +
            '\n' +
            "L’altération de toute partie de l'Application sous Licence ;\n" +
            '\n' +
            "L’utilisation de l'Application sous Licence pour transmettre tout virus ou tout autre code informatique, fichier ou programme nuisible ou destructeur, ou pour mener des activités de piratage et/ou d'intrusion ;\n" +
            '\n' +
            "Tenter de contourner ou de subvertir toute mesure de sécurité associée à l'Application sous Licence ;\n" +
            '\n' +
            "Entreprendre toute action qui pourrait raisonnablement être interprétée comme susceptible d'affecter négativement les autres utilisateurs de l'Application sous Licence ;\n" +
            '\n' +
            'Où\n' +
            '\n' +
            "Supprimer ou modifier tout symbole ou avis de propriété, y compris tout avis de droit d'auteur, marque ou logo, affiché en relation avec l'Application sous Licence.",
        },
      },
      IdentityTheft: {
        title: "En cas de vol d'identité",
        body: "Si vous soupçonnez que la Sécurité de votre portefeuille et de son contenu a été compromise , vous devez communiquer immédiatement  avec *le Centre de relations de la clientèle d'identité Québec*. Vous ne serez pas tenu responsable en cas de vol d'identité dans la mesure ou vous respectez les présentes conditions.",
        subsection: {
          title: 'Indemnisation',
          body:
            'Vous acceptez d’indemniser, de défendre et de dégager de toute responsabilité la province et tous ses fonctionnaires, employés et agents respectifs à l’égard de toutes les réclamations, demandes, obligations, pertes, passifs, coûts ou dettes et dépenses (y compris, sans s’y limiter, les frais juridiques raisonnables).\n' +
            '\n' +
            ' Découlant :\n' +
            '\n' +
            ' (a) de votre utilisation de l’Application sous licence ;\n' +
            '\n' +
            ' Où\n' +
            '\n' +
            ' (b) de votre violation de toute disposition du présent CLUF',
        },
      },
      Privacy: {
        title: 'Protection et vie privée',
        body: 'Le gouvernement du Québec se préoccupe de la protection de votre vie privée et des renseignements personnels et confidentiels qui sont contenus dans cette application. Vous avez la responsabilité de consulter *la Politique de confidentialité pour connaitre les pratiques du gouvernements du Québec à ce sujet.*',
        subsection: {
          title: 'Protection des données personnelles',
          body:
            'Si vous visitez le site Web de l’application sous licence à\n' +
            '\n' +
            'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique,\n' +
            '\n' +
            "Y compris pour accéder au Fonction d’aide pour l’application sous licence ou le contenu connexe à https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique, certaines informations vous seront fournies conformément à la Déclaration de confidentialité de la province pour les sites Web du gouvernement. Certains renseignements sont également recueillis dans le cadre de la demande de permis, comme il est indiqué dans la Politique de confidentialité de Quebec Wallet App (la « Politique de confidentialité »), qui est incorporée par renvoi dans le présent CLUF et en fait partie. Vous consentez à la collecte par l’Application sous licence de ces informations qui, avec votre Contenu, sont stockées localement sur votre appareil et n’est pas accessible à la province, sauf dans les cas où vous choisissez de fournir des renseignements à la province, comme il est indiqué dans la politique de confidentialité. Tous les renseignements que vous fournissez à la province qui sont des « renseignements personnels », au sens de la Loi sur l’accès à l’information et la protection de la vie privée du Québec (« la Loi »), sont recueillis par la province en vertu de l’alinéa 26c la Loi, aux fins énoncées dans la Politique de confidentialité. Toute question concernant la collecte de ces renseignements peut être adressée à la personne-ressource indiquée à l'article 11. Les consentements que vous avez fournis conformément au présent article seront maintenus jusqu'à ce que vous les révoquiez par écrit à la personne-ressource mentionnée à l'article 11, auquel cas le présent ALUF prendra fin immédiatement, conformément à l'article 9.",
        },
      },
      AppAccess: {
        title: "Droit d'accès à l'application",
        body: "Le gouvernement du Québec peut suspendre l'accès à cette application si vous ne respectez pas les présentes conditions d'utilisation . Il peut également le faire pour les présentes conditions d'utilisation. Il peut également le faire pour des motifs de sécurité ou à des fins administratives.",
        subsection: {
          title: 'Limitations',
          body:
            'Dans la mesure où la loi applicable le permet, la Province ne sera en aucun cas en aucun cas, la Province ne sera responsable envers toute personne ou entité de toute perte, réclamation, blessure ou dommage direct, indirect, spécial, accessoire ou consécutif, ou de toute autre perte, réclamation, blessure ou dommage.\n' +
            '\n' +
            'Si prévisible ou imprévisible (y compris les demandes de limitation de dommages-intérêts pour perte de profits ou occasions d’affaires, l’utilisation ou l’utilisation abusive ou l’impossibilité d’utiliser , l’application sous licence , les interruptions , la suppression ou la corruption de fichiers , la perte de programmes ou d’informations , les erreurs, les défauts ou les retards ) découlant de votre utilisation de l’application sous licence ou y étant lié de quelque façon que ce soit, qu’il soit fondé sur un contrat, un délit, une responsabilité stricte ou toute autre théorie juridique. La phrase précédente s’appliquera même si la province a été expressément informée de la possibilité d’une telle perte, réclamation, blessure ou dommage. Les parties reconnaissent qu’Apple n’est pas responsable :\n' +
            '\n' +
            'a) traiter toute réclamation que vous ou un tiers de quelque nature que ce soit relativement à la demande autorisée;\n' +
            '\n' +
            'b) votre possession et/ou utilisation de la demande de permis.',
        },
      },
      More: {
        body: 'En savoir plus sur *ces conditions générales(*)*',
      },
    },
  },
  Attributes: {
    given_name: 'Prénom',
    family_name: 'Nom de famille',
    birthdate_dateint: 'Date de naissance',
    picture: 'Photo',
    issue_date_dateint: 'Date d’émission',
    expiry_date_dateint: 'Date d’expiration',
    issuing_jurisdiction: 'Juridiction d’émission',
  },
}

export default translation
