<!-- ENTETE -->

[![img](https://img.shields.io/badge/Cycle%20de%20Vie-Phase%20B%C3%AAta-339999)](https://www.quebec.ca/gouv/politiques-orientations/vitrine-numeriqc/accompagnement-des-organismes-publics/demarche-conception-services-numeriques#collapse-59354)
[![License](https://img.shields.io/badge/Licence-LiLiQ--R-blue)](https://forge.gouv.qc.ca/licence/liliq-r/)
---

<div>
    <a target="_blank" href="https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique">
      <img src="https://github.com/CQEN-QDCE/.github/blob/main/images/mcn.png" alt="Logo du Ministère de la cybersécurité et du numérique" />
    </a>
</div>
<!-- FIN ENTETE -->

# ING Vérif
Application mobile qui permet d'effecter des demandes de preuve dans un écosystème d'identité auto-souveraine ([SSI](https://sovrin.org/faq/what-is-self-sovereign-identity)) basé sur [Hyperledger Aries](https://www.hyperledger.org/use/aries). L'application joue le rôle de vérificateur garantissant que les déclarations faite par un détenteur d'identité numérique sont exactes et dignes de confiance.

## Installation
1. Clonez le dépôt
   ```sh
   git clone https://github.com/MCN-ING/ing-verif.git
   ```
2. Installer ses dépendances
   ```sh
   cd ing-verif
   npm install
   ```
3. Si vous voulez déployer sur iOS:
    * Installez les Pods iOS:
    ```sh
    cd ios
    pod install
    ```
    * Ouvrez le fichier de l'espace de travail du projet, IngVerif.xcworkspace, dans Xcode. Une fois le projet ouvert, accédez à l'onglet "Signing & Capabilities" du projet et appliquez votre compte personnel de développeur Apple ou l'équipe de votre organisation.
    * Ajuster l'identifiant du paquet si nécessaire.
## Licence
Distribué sous Licence Libre du Québec – Réciprocité (LiLiQ-R). Voir [LICENCE](https://forge.gouv.qc.ca/licence/liliq-r/) pour plus d'informations.
