import React, { useState } from "react";

import { useHttpClient } from "../shared/hooks/http-hook";

import "../style/AjouterEtudiant.css";
function NouveauEtudiant({ ajouterEtudiant }) {

  const { error, sendRequest, clearError } = useHttpClient();
  // Validations
  const [validationDA, setValidationDA] = useState(false);
  const [validationNom, setValidationNom] = useState(false);
  const [validationcourriel, setValidationcourriel] = useState(false);
  const [validationProfil, setValidationProfil] = useState(false);
  // saisies
  const [saisiecourriel, setSaisiecourriel] = useState("");
  const [saisieNom, setSaisieNom] = useState("");
  const [saisieDA, setSaisieDA] = useState("");
  const [saisieProfil, setSaisieProfil] = useState("");

  const ajoutNouveauEtudiantHandler = async (event) => {
    event.preventDefault();
    if (validationDA && validationNom && validationcourriel && validationProfil) {
      const nouveauEtudiant = {
        DA: saisieDA,
        nom: saisieNom,
        courriel: saisiecourriel,
        profil: saisieProfil,
        stagesPostule: [],
        stage: {}
      };

      try {
        const reponseData = await sendRequest(
          "http://localhost:5000/etudiants/inscription",
          "POST",
          JSON.stringify({
            DA: saisieDA,
            nom: saisieNom,
            courriel: saisiecourriel,
            profil: saisieProfil
          }),
          {
            "Content-Type": "application/json",
          }
        );

        console.log(reponseData);
      } catch (err) {
        console.log(err);
      }

      ajouterEtudiant(nouveauEtudiant);

      setSaisiecourriel("");
      setSaisieNom("");
    }
  };

  function saisiecourrielHandler(event) {
    setSaisiecourriel(event.target.value);
    if (event.target.value != "") {
      setValidationcourriel(true);
    } else {
      setValidationcourriel(false);
    }
  }

  function saisieDAHandler(event) {
    setSaisieDA(event.target.value);
    if (event.target.value != "") {
      setValidationDA(true);
    } else {
      setValidationDA(false);
    }
  }

  function saisieNomHandler(event) {
    setSaisieNom(event.target.value);
    if (event.target.value != "") {
      setValidationNom(true);
    } else {
      setValidationNom(false);
    }
  }

  function saisieProfilHandler(event) {
    setSaisieProfil(event.target.value);
    if (event.target.value != "") {
      setValidationProfil(true);
    } else {
      setValidationProfil(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ajoutNouveauEtudiantHandler}>
      <div className="AjouterEtudiant_controls">
        <h2>Ajouter etudiant</h2>
        <br />
        DA : <input type="text" value={saisieDA} onChange={saisieDAHandler} />
        <br />
        Nom :<input type="text" value={saisieNom} onChange={saisieNomHandler} />
        <br /> Courriel:{" "}
        <input
          type="text"
          value={saisiecourriel}
          onChange={saisiecourrielHandler}
        />
        <br /> 
        <br /> Profil de sortie:{" "}
        <input
          type="text"
          value={saisieProfil}
          onChange={saisieProfilHandler}
        />
        <br /> 

        <div className="AjouterEtudiant_action">
          <button
            className="AjouterEtudiant_Button"
            type="submit"
            onSubmit={handleSubmit}
          >
            {" "}
            Ajouter l'étudiant
          </button>
        </div>
      </div>
    </form>
  );
}

export default NouveauEtudiant;
