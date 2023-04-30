import React from "react";
import { Link } from "react-router-dom";
import "../../style/Etudiant.css"
import Card from "./components/Card";
import Profile from "./components/Profile";

function Etudiant({ professeur }) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={"/etudiant"}>
          <div className="user-item__image">
            <Profile image={etudiant.image} alt={etudiant.nom} />
          </div>

          <div className="user-item__info">
            <h2>{etudiant.nom + " " + etudiant.prenom}</h2>
            <h5>{"Cours : " + etudiant.Cours }</h5>
            <h3>{"Date d'Embauche: " + etudiant.dateEmbauche} </h3>
          </div>


        </Link>
      </Card>
    </li>
  );
}

export default Professeur;