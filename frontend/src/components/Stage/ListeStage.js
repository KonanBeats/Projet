import React from "react";
import Stage from "./Stage";
import Card from "./components/Card";

function ListeStage(props) {


  if (props.stages.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun stage</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="stage-list">
      {props.stages.map((stage) => (
        <div key={stage.id} className="stage-solo">
        <Stage key={stage.id} stage={stage} />
        <button className="ButtonList" onClick={() => props.onEditStage(stage.id)}>
            Modifier
          </button>
        <button className="ButtonList" onClick={() => props.onDeleteStage(stage.id)}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
}

export default ListeStage;


